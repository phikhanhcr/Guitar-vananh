import { Button, Modal } from '@material-ui/core';
import Axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../../ContextApi/CartContext';
import { userContext } from '../../../ContextApi/UserContext'
import Puppop from './Pupop';
function EachProductReceipt({ ele }) {
  const [amount, setAmount] = useState(ele.amount)
  const [show, setShow] = useState(false);

  const { userCart, setUserCart } = useContext(CartContext)
  const { userData, setUserData } = useContext(userContext)
  const onChangeInput = e => {
    setAmount(e.target.value)
  }

  const handleOpenPopup = () => {
    setShow(true);
  }

  const handleRemove = () => {
  removeItem();
  }


  async function removeItem() {
    await Axios.delete(`http://localhost:3000/api/cart/${userData.user._id}/${ele._id}`, {
      headers: { 'x-auth-token': userData.token }
    }).then(res => res.data)
      .then(data => {
        if (data.findIndex !== -1) {
          Axios.get('http://localhost:3000/api/cart', {
            headers: { 'x-auth-token': userData.token }
          }).then(res => res.data)
            .then(data => {
              setUserCart(data.cart)
            }).catch(err => {
              console.log(err)
            })
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
    <tr>
      <Puppop
        handleClose={handleClose}
        show={show}
        handleRemove={handleRemove}
      />
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
          defaultValue={ele.amount}
          onChange={onChangeInput}
          min={1}
        />
      </td>
      <td>{ele.idProduct.price}</td>
      <td>{ele.idProduct.price * amount}</td>
      <td className="s20 t1 black cursor-pointer" onClick={handleOpenPopup}>X</td>
    </tr>
  );
}

export default EachProductReceipt;