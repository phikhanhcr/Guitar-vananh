import React from 'react';
import { Container, Row } from 'reactstrap';
import './News.css'

function News(props) {
  return (
    <section className="news">
      <Container>
        <h2 className="text-uppercase s30" style={{ marginBottom: 60 }}> TIN TỨC NỔI BẬT</h2>
        <Row>
          <div className="col-md-6 col-sm-12 d-flex align-items-center space-around">
            <img className="pr-10" src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2FUntitled.png?v=1600502409912" alt="bangkhen" />
            <div className="news-info text-center">
              <a href="#" className="s20 link-ref  bold">
                Chúc mừng C# Văn Anh Audio đạt
                Top 100 Thương Hiệu Uy Tín
                Việt Nam 2018
       
              </a>

              <hr />
              <p>Văn Anh Audio với logo C# đã được
              giải thưởng nhà nước
              Top 100 Thương Hiệu Uy Tín
              </p>
              <a href="#" className="link-ref bold"> Xem thêm  </a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex align-items-center space-around">
            <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2F1.png?v=1600502969581" alt="bangkhen" />
            <div className="news-info text-center">
              <a href="#" className="link-ref s20 bold">
                Video Giới thiệu đàn C#2018
              </a>

              <hr />
              <p>Video Giới thiệu đàn C#2018
              </p>
              <a href="#" className="link-ref bold"> Xem thêm  </a>
            </div>

          </div>
        </Row>




      </Container>
    </section>
  );
}

export default News;