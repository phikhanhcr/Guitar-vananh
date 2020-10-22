
import { FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React from 'react';
import { Container, Row } from 'reactstrap'
import Footer from '../Home/Footer/Footer';
import './Cart.css'
import BankAccount from './BankAccount';
import TableReceipt from './Table/TableReceipt';
function Cart(props) {
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
          <Row>
            <form className="d-flex">
              <div className="col-lg-4 col-md-6">

                <TextField id="standard-basic" label="Họ tên khách hàng" type="text" required />
                <TextField id="standard-basic" label="Địa chỉ nhận hàng" type="text" required />
                <TextField id="standard-basic" label="Điện thoại liên hệ" type="text" required />
                <TextField id="standard-basic" label="Email" type="email" required />
                <TextField className="mt-4" id="outlined-basic" label="Note: " variant="outlined" type="text" />

              </div>
              <div className="col-lg-4 col-md-6">
                <BankAccount />
              </div>
              <div className="col-lg-4 col-md-6">
                <div className='d-flex flex-column h-100 justify-content-space-around '>
                  <div className="d-flex">
                    <p className="bold mr-3">Tạm tính:</p>
                    <span> 4,000,000 VNĐ</span>
                  </div>

                  <p>Phí giao hàng: Phí ship sẽ được tính tùy theo địa chỉ của khách hàng. (Nếu quý khách yêu cầu
                  đặt theo COMBO thì nhắn vào phần ghi chú cho shop biết nhé) VNĐ</p>
                  <div className="d-flex">
                    <p className="bold mr-3">Tổng thanh toán:</p>
                    <p>4,000,000 VNĐ</p>
                  </div>
                  <button className="btn btn-dark">Đặt Hàng</button>
                </div>
              </div>
            </form>
          </Row>
        </Container>

      </div>
      <Footer />
    </main>
  );
}

export default Cart;