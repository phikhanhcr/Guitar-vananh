import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AllProducts.css'
import Option from './Option';
import BannerProduct from './BannerProduct';
import Pagination from "react-js-pagination";


function AllProducts(props) {
  const [activePage, setActivePage] = useState(1);
  const [products, setProducts] = [1, 2, 3, 4, 5, 6, 7, 8];



  const handlePageChange = (pageNumber) => {
    console.log("Page is actived : " + activePage);
    setActivePage(pageNumber)
  }

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
console.log(products)
  return (
    // left
    <div className="container">
      <BannerProduct />
      <Row>
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div className="wrapper-catalogs shadow">
            <div className="wrapper-title ">
              <h4>Danh mục</h4>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0 s20">
                    <button class="s20 btn btn-link btn-block link-ref  text-left cl-f26522" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Đàn Guitar
                    </button>
                  </h2>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <ul>
                      <li><a href="#">Đàn Guitar Acoustic</a></li>
                      <li><a href="#">Đàn Guitar Clasic</a></li>
                      <li><a href="#">Đàn Guitar Solo Bolero</a></li>
                      <li><a href="#">Guitar Amplifier - Âm li cho đàn Guitar</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left cl-f26522 collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Trống cajon
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">
                    <ul>
                      <li><a href="#">Cajon đời mới*</a></li>
                      <li><a href="#">Cajon đời cũ (Tham khảo)</a></li>

                    </ul>
                  </div>

                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left cl-f26522 collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Phụ kiện - Sách & Tab sheet nhạc
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div class="card-body">
                    <ul>
                      <li><a href="#"> Phụ kiện trống Cajon</a> </li>
                      <li><a href="#"> Phụ kiện đàn Guitar </a></li>
                      <li><a href='#'> Sách & Tab, sheet nhạc Guitar </a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left cl-f26522 collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Tiêu Sáo
                    </button>
                  </h2>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                  <div class="card-body">
                    <ul style={{ display: "flex", flexDirection: "column" }}>
                      <li><a href="#">Tiêu</a></li>
                      <li> <a href="#">Sáo trúc</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


          </div >
        </div >


        {/* Right */}
        < div className="col-lg-9 col-md-8 col-sm-12" >
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
              <div className="pagination">
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={10}
                  totalItemsCount={450}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange.bind(this)}
                />
              </div>
            </Row>
          </div>
        </ div >
      </Row >
    </div >
  );
}

export default AllProducts;