
import Axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Row, Container } from 'reactstrap';
import { OrderContext } from '../../ContextApi/OrderContext';
import EmptyList from '../../Images/nothing.png'

import Footer from '../Home/Footer/Footer';
import Cancelled from './Cancelled';
import './DonMua.css'
import EachPurchase from './EachPurchase';
import Pending from './Pending';
import Shipping from './Shipping';
function DonDaMua(props) {
  const [condition, setCondition] = useState("all-list")

  const { listOrder } = useContext(OrderContext)

  const handleClickAllList = (e) => {
    setCondition(e.target.getAttribute('about'))
  }
  const handleClickPending = (e) => {
    setCondition(e.target.getAttribute('about'))
  }
  const handleClickCancelled = (e) => {
    setCondition(e.target.getAttribute('about'))
  }
  const handleClickShipping = (e) => {
    setCondition(e.target.getAttribute('about'))
  }
  const handleClickDelivered = (e) => {
    setCondition(e.target.getAttribute('about'))
  }
  useEffect(() => {
    var i, tabContent;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    document.getElementById(condition).style.display = "block";

  }, [condition])

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
        <div className="bg-ddd d-flex justify-content-space-around">
          <div onClick={handleClickAllList} about="all-list" className="purchase-list-page__tab">Tất cả</div>
          <div onClick={handleClickPending} about="pending" className="purchase-list-page__tab">Chờ lấy hàng</div>
          <div
            about="shipping"
            className="purchase-list-page__tab"
            onClick={handleClickShipping}
          >
            Đang giao
          </div>
          <div
            about="delivered"
            onClick={handleClickDelivered}
            className="purchase-list-page__tab">
            Đã Giao
          </div>
          <div
            className="purchase-list-page__tab"
            about="cancelled"
            onClick={handleClickCancelled}
          >Đã Hủy
            </div>
        </div>

        <div id="all-list" className="purchase-list tab-content mt-5">
          <p>Tất cả</p>
          {
            <EachPurchase />
          }

        </div>

        <div id="pending" className="purchase-list tab-content mt-5">
          <p>Đang chờ xác nhận</p>
          {
            listOrder.length ? listOrder.filter(ele => {
              return ele.condition === "dang-cho-xac-nhan"
            }).map(ele => (
              <Pending ele={ele} />
            )) : <div>
                <img src={EmptyList} alt="emptyList" />
              </div>
          }
        </div>

        <div id="shipping" className="purchase-list tab-content mt-5">
          <p>Đang giao hàng</p>
          {
            listOrder.length && listOrder.filter(ele => {
              return ele.condition === "dang-giao"
            }).length ? listOrder.filter(ele => {
              return ele.condition === "dang-giao"
            }).map(ele => (
              <Shipping ele={ele} />
            )) : <div>
                <img src={EmptyList} alt="emptyList" />
              </div>
          }

        </div>

        <div id="delivered" className="purchase-list tab-content mt-5">
          <p>Đa Nhan</p>
          <div>
                <img src={EmptyList} alt="emptyList" />
              </div>
        </div>
        <div id="cancelled" className="purchase-list tab-content mt-5">
          {
            listOrder.length && listOrder.filter(ele => {
              return ele.condition === "da-huy"
            }).length ? listOrder.filter(ele => {
              return ele.condition === "da-huy"
            }).map(ele => (
              <Cancelled ele={ele} />
            )) : <div>
                <img src={EmptyList} alt="emptyList" />
              </div>
          }

        </div>
      </Container>
      <Footer />
    </main>
  );
}

export default DonDaMua;