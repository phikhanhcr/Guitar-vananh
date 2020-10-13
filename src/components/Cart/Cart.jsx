
import React from 'react';
import { Container, Row } from 'reactstrap'
import Footer from '../Home/Footer/Footer';
import './Cart.css'
function Cart(props) {
  return (
    <section className="cart">
      <div className="banner-page">
        <Container>
          <div className="banner-page-wrap d-flex flex-column  justify-content-center align-items-center">
            <h1 className="s36 bold cl-f26522 text-uppercase text-center breadcrumb-tit ">Giỏ Hàng</h1>
            <ul className="pb-3">
              <li><a href="http://localhost:3001"> Trang Chủ </a></li>
              <li> Giỏ Hàng</li>
            </ul>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <div className="col-lg-9 col-sm-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Total Money</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td className="d-flex img-table">
                      <img src="https://nhaccuphutho.vn/wp-content/uploads/2020/05/Guitar-Acoustic-Yamaha-FS800.jpg" alt="img"/>
                      <p>Dan Guitar Acoustic</p>

                    </td>
                    <td>
                      <input type="number" />
                    </td>
                    <td>5</td>
                    <td>50000000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-3 col-sm-12">

            </div>
          </Row>

        </Container>
      </div>
      <Footer />
    </section>
  );
}

export default Cart;