import React from 'react';
import AllProducts from './AllProducts/AllProducts';
import Footer from '../Home/Footer/Footer'
import { Container } from 'reactstrap';
function SanPham(props) {
  return (
    <div>
      <main>
      <section className="banner-page">
        <Container>
          <div className="banner-page-wrap d-flex flex-column  justify-content-center align-items-center">
            <h1 className="s36 bold cl-f26522 text-uppercase text-center breadcrumb-tit ">Sản phẩm</h1>
            <ul className="pb-3">
              <li><a href="http://localhost:3001"> Trang Chủ </a></li>
              <li><a href="http://localhost:3001/san-pham"> Sản Phẩm</a></li>
              
            </ul>
          </div>
        </Container>
      </section>
        <AllProducts />
        <Footer />
      </main>
    </div>
  );
}

export default SanPham;