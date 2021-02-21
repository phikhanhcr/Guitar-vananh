
import { TextField } from '@material-ui/core';
import React from 'react';
import { Container, Row } from 'reactstrap'
import Footer from '../Home/Footer/Footer';
import './Cart.css'
import BankAccount from './BankAccount';
import TableReceipt from './Table/TableReceipt';
import { CartContext } from '../../ContextApi/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { userContext } from '../../ContextApi/UserContext';
import { store } from 'react-notifications-component';
import { Redirect } from 'react-router-dom';

function Cart(props) {
  const { userCart } = useContext(CartContext)
  const { userData } = useContext(userContext)
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [payByCash, setPayByCash] = useState(true);
  const [statusOrder , setStatusOrder ] = useState(false);
  const totalMoney = userCart.reduce((a, b) => {
    return a + b.amount * b.idProduct.price
  }, 0)
  const handleSubmitOrder = e => {
    e.preventDefault();

    async function postData() {
      await Axios.post('http://localhost:3000/api/donhang', {
        name, address, email, phone, note, payByCash,
        cart : userCart, 
        userId : userData.user._id 
      }, {
        headers: { 'x-auth-token': userData.token }
      }).then(res => res.data )
      .then(data => {
        console.log(data)
        store.addNotification({
          title: "Order successfully!",
          message: "You will be redirected to your Order!",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 1800,
            onScreen: true
          }
        })
        setStatusOrder(true)
      }).catch(err => {
        console.log(err)
      })
    }
    postData();
    // 1. display a notification when ordering successfully : done
    // 2. redirect to /donhang : done
    // 3. remove cart : done
    // 4. Build DonHangPage
  }
  if(statusOrder) {
    return <Redirect to="/"/>
  }
  return (
    <main className="cart">
      <section className="banner-page">
        <Container>
          <div className="banner-page-wrap d-flex flex-column w-100  justify-content-center align-items-center">
            <h1 className="s36 bold cl-f26522 text-uppercase text-center breadcrumb-tit ">Giỏ Hàng</h1>
            <ul className="pb-3">
              <li><a href="http://localhost:3001"> Trang Chủ </a></li>
              <li> Giỏ Hàng</li>
            </ul>
          </div>
        </Container>
      </section>
      <div>
        <Container>
          <TableReceipt />
          <p className="info-book s20 bold text-center w-100 bg-ddd p-3">THÔNG TIN ĐẶT HÀNG</p>

          <form className="d-flex" onSubmit={handleSubmitOrder}>
            <Row>
              <div className="col-lg-4 col-md-6">

                <TextField value={name} onChange={e => setName(e.target.value)} id="standard-basic" label="Họ tên khách hàng" type="text" required />
                <TextField value={address} onChange={e => setAddress(e.target.value)} id="standard-basic" label="Địa chỉ nhận hàng" type="text" required />
                <TextField value={phone} onChange={e => setPhone(e.target.value)} id="standard-basic" label="Điện thoại liên hệ" type="text" required />
                <TextField value={email} onChange={e => setEmail(e.target.value)} id="standard-basic" label="Email" type="email" required />
                <TextField value={note} onChange={e => setNote(e.target.value)} className="mt-4" id="outlined-basic" label="Note: " variant="outlined" type="text" />

              </div>
              <div className="col-lg-4 col-md-6">
                <BankAccount setPayByCash={setPayByCash} />
              </div>
              <div className="col-lg-4 col-md-6">
                <div className='d-flex flex-column h-100 justify-content-space-around '>
                  <div className="d-flex">
                    <p className="bold mr-3">Tạm tính:</p>
                    <span> {totalMoney}</span>
                  </div>

                  <p>Phí giao hàng: Phí ship sẽ được tính tùy theo địa chỉ của khách hàng. (Nếu quý khách yêu cầu
                  đặt theo COMBO thì nhắn vào phần ghi chú cho shop biết nhé) VNĐ</p>
                  <div className="d-flex">
                    <p className="bold mr-3">Tổng thanh toán:</p>
                    <p>{totalMoney}</p>
                  </div>
                  <button className="btn btn-dark">Đặt Hàng</button>
                </div>
              </div>
            </Row>
          </form>
        </Container>

      </div>
      <Footer />
    </main>
  );
}

export default Cart;