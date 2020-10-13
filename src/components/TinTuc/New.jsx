import React from 'react';
import { Container } from 'reactstrap';
import Footer from '../Home/Footer/Footer';
import './New.css'
function New(props) {
  return (
    <main>
      <section className="banner-page"> 
        <Container>
          <div className="banner-page-wrap d-flex flex-column  justify-content-center align-items-center">
            <h1 className="s36 bold cl-f26522 text-uppercase text-center breadcrumb-tit ">Tin tức</h1>
            <ul className="pb-3">
              <li><a href="http://localhost:3001"> Trang Chủ </a></li>
              <li><a href="http://localhost:3001/tin-tuc"> Tin tức</a></li>
            </ul>
          </div>
        </Container>
      </section>
      <section className='tin-tuc'>
        <div className="container">
          <div className="row">
            {
              [1, 2, 3, 4, 5, 21, 3].map(ele => (
                <div className="col-lg-4 col-md-6 blog-element">
                  <div className="blog-wrap cursor-pointer">
                    <figure className="blog-img">
                      <a href="#" className="d-flex justify-content-center" >
                        <img className=" item-blog-img" src="https://vananhaudio.com/upload/news/1590466894_7.jpg" />
                      </a>
                    </figure>
                    <figure className="blog-info">
                      <h3 className="s18 cl-white"> SHOP ĐÀN GUITAR VĂN ANH AUDIO TẠI ĐÀ NẴNG</h3>1
                      <p className="cl-white">
                        Văn Anh Audio hiện nay có ba chi nhánh
                        tại Hà Nội - Đà Nẵng và TPHCM Đặc biệt
                        shop guitar & cajon Văn Anh Audio tại
                        Đà Nẵng được có mặt từ rất lâu đời và được
                        các bài báo nổi tiếng bình chọn là Top nhạc cụ
                        nổi tiếng nhất Đà Nẵng
                      </p>
                    </figure>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default New;