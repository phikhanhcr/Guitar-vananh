
import React from 'react';
import { Row, Container } from 'reactstrap';

import Footer from '../Home/Footer/Footer';
import './DonMua.css'
import EachPurchase from './EachPurchase';
function DonDaMua(props) {
  return (
    <main>
      <section className="banner-page">
        <Container>
          <div className="banner-page-wrap d-flex flex-column w-100  justify-content-center align-items-center">
            <h1 className="s36 bold cl-f26522 text-uppercase text-center breadcrumb-tit ">Đơn Mua</h1>
            <ul className="pb-3">
              <li><a href="http://localhost:3001"> Trang Chủ </a></li>
              <li> Đơn Mua</li>
            </ul>
          </div>
        </Container>

      </section>
      {/* don mua shoppe */}
      <Container>
        <div className="d-flex justify-content-space-around">
          <div className="purchase-list-page__tab">Tất cả</div>
          <div className="purchase-list-page__tab">Chờ xác nhận</div>
          <div className="purchase-list-page__tab">Chờ lấy hàng</div>
          <div className="purchase-list-page__tab">Đang giao</div>
          <div className="purchase-list-page__tab">Đã Giao</div>
          <div className="purchase-list-page__tab">Đã Hủy</div>
        </div>
        <input placeholder="Tìm kiếm theo tên đơn hàng..." />
        <div className="purchase-list mt-5">
          <EachPurchase />
          <EachPurchase />
          <EachPurchase />
        </div>
      </Container>
      <Footer />
    </main>
  );
}

export default DonDaMua;