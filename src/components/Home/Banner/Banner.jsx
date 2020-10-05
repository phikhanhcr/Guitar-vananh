import React from 'react';
import './Banner.css'

function Banner(props) {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 pl-15 pr-15">
            <div className="banner-wrap bg-fff  d-flex align-items-center justify-content-between px-2 h-100">
                <div className="banner-info">
                  <h2 className="text-uppercase black t1 s14 pb-3 banner-info-tit"> Guitar</h2>
                  <p>Đàn Guitar với Logo C#</p>
                  <a className="link-ref" href="/san-pham">Xem thêm</a>
                </div>
                <div className="banner-img">
                  <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2FUntitled.png?v=1600485924929" alt="guitar"/>

                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 gutters-5  wow fadeInUp">
            <div className="banner-wrap d-flex bg-fff align-items-center justify-content-between px-2 h-100">
                <div className="banner-info">
                  <h2 className="text-uppercase black t1 s14 pb-3 banner-info-tit"> Trống Cajon</h2>
                  <p>Trống Cajon với Logo C#</p>
                  <a className="link-ref" href="/san-pham">Xem thêm</a>
                </div>
                <div className="banner-img">
                  <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2F1.png?v=1600488964494" alt="cajon"/>

                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 gutters-5  wow fadeInUp">
            <div className="banner-wrap d-flex bg-fff align-items-center justify-content-between px-2 h-100">
                <div className="banner-info">
                  <h2 className="text-uppercase black t1 s14 pb-3 banner-info-tit"> Guitar điện</h2>
                  <p>Guitar điện với Logo C#</p>
                  <a className="link-ref" href="/san-pham">Xem thêm</a>
                </div>
                <div className="banner-img">
                  <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2F3.png?v=1600488959057" alt="guitar"/>

                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;