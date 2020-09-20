import React from 'react';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AllProducts.css'
import Option from './Option';

function AllProducts(props) {

  const onClickHandle = e => {
    console.log(e.target.parentNode.parentNode.lastChild.classList)
    var arrayActive = document.getElementsByClassName('active-catalogs')
    if (arrayActive.length) {
      for (let i of arrayActive) {
        console.log(i)
        i.classList.remove('active-catalogs')
      }
    }
    e.target.parentNode.parentNode.lastChild.classList.toggle('active-catalogs')

  }

  return (
    // left
    <div className="container">
      <Row>
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div className="wrapper-catalogs">
            <div className="wrapper-title ">
              <h3>Danh mục</h3>
            </div>
            <div className="panel cursor-pointer">
              <div className="panel-heading cl-f26522" onClick={onClickHandle}>
                <p>Đàn Guitar</p>
              </div>
              <div className="panel-expand">
                <ul>
                  <li>Đàn Guitar Acoustic</li>
                  <li>Đàn Guitar Acoustic</li>
                  <li>Đàn Guitar Acoustic</li>
                </ul>
              </div>
            </div>
            <div className="panel cursor-pointer">
              <div className="panel-heading cl-f26522 " onClick={onClickHandle}>
                <p> Guitar Classic</p>
              </div>
              <div className="panel-expand">
                <ul>
                  <li>Đàn Guitar Acoustic</li>
                  <li>Đàn Guitar Acoustic</li>
                  <li>Đàn Guitar Acoustic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* Right */}
        <div className="col-lg-9 col-md-8 col-sm-12">
          <Option />
          <div className='product-wrap'>
            <Row>
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map(ele => (
                  <div className='col-lg-4 col-md-6 col-sm-6' >
                    <div className="product-item bg-f6f6f6 pb-15 ">
                      <div className="item-img d-flex justify-content-center">
                        <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2FUntitled.png?v=1600496496998" alt="hi" />
                      </div>
                      <div className="item-info">
                        <h2 className="s15 bold">
                          <a href="#" className="t1">
                            KHÓA ĐÀN GUITAR ACOUSTIC ĐÚC ĐEN KA180
                      </a>
                        </h2>
                        <h3 className="s20">300000</h3>
                      </div>
                      <div className="product-over p-3 text-center" >
                        <a href="#" className="mr-3">
                          <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2Fexpand.png?v=1600500234753" alt="expand" />
                        </a>
                        <a href="#">
                          <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2Fshopping-cart.png?v=1600500241553" alt="cart" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Row>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default AllProducts;