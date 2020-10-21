import { Container } from '@material-ui/core';
import React from 'react';

function Registration(props) {
  return (
    <main>
      <section className="banner-page">
        <Container>
          <div className="banner-page-wrap d-flex flex-column  justify-content-center align-items-center">
            <h1 className="s36 bold cl-f26522 text-uppercase text-center breadcrumb-tit ">Đăng ký học viên</h1>
            <ul className="pb-3">
              <li><a href="http://localhost:3001"> Trang Chủ </a></li>
              <li><a href="http://localhost:3001/lien-he">Đăng ký </a></li>       
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Registration;