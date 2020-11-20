
import Axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../../ContextApi/CartContext';
import { userContext } from '../../../ContextApi/UserContext'
import Puppop from './Pupop';
function EachProductReceipt({ ele }) {
  const [amount, setAmount] = useState(ele.amount)
  const [show, setShow] = useState(false);
  const {setUserCart } = useContext(CartContext)
  const { userData } = useContext(userContext)

  const eachMoney = ele.idProduct.price * amount;
  const onChangeInput = e => {
    setAmount(e.target.value)
    updateAmount(e.target.value)
  }
  

  const handleOpenPopup = () => {
    console.log(ele)
    setShow(true);
  }

  const handleRemove = () => {
    removeItem();
  }
  async function updateAmount(update) {
    await Axios.put(`http://localhost:3000/api/cart/${userData.user._id}/${ele._id}`,
      { amount: update }, {
      headers: { 'x-auth-token': userData.token }
    }).then(res => res.data)
      .then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    getCart();
  }
  async function getCart() {
    await Axios.get('http://localhost:3000/api/cart', {
      headers: { 'x-auth-token': userData.token }
    }).then(res => res.data)
      .then(data => {
        setUserCart(data.cart)
      }).catch(err => {
        console.log(err)
      })
  }
  async function removeItem() {
    await Axios.delete(`http://localhost:3000/api/cart/${userData.user._id}/${ele._id}`, {
      headers: { 'x-auth-token': userData.token }
    }).then(res => res.data)
      .then(data => {
        if (data.findIndex !== -1) {
          getCart();
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Puppop
        handleClose={handleClose}
        show={show}
        handleRemove={handleRemove}
      />
      <tr>
        <th scope="row">1</th>
        <td className="d-flex img-table">
          <img src={ele.idProduct.img} alt="img" />
          <p>{ele.idProduct.name}</p>
        </td>
        <td>
          <input
            name="amount"
            type="number"
            value={amount}
            onChange={onChangeInput}
            min={1}
          />
        </td>
        <td>{ele.idProduct.price}</td>
        <td>{eachMoney}</td>
        <td className="s20 t1 black cursor-pointer" onClick={handleOpenPopup}>X</td>
      </tr>
    </>
  );
}

export default EachProductReceipt;