import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AllProducts.css'
import Option from './Option';
import BannerProduct from './BannerProduct';
import PaginationComponents from './Pagination'
import { faTeeth } from '@fortawesome/free-solid-svg-icons';
import EachProduct from './EachProduct';
import Pagination from 'react-js-pagination'


function AllProducts(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(9);

  useEffect(() => {
    async function fetchData() {
      await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setProducts(data)
          setLoading(false)
        }).catch(err => {
          console.log(err)
        })
    }
    fetchData()
  }, [])

  // tim index cai dau va cuoi
  const indexOfLastPro = currentPage * productPerPage; // 10 
  console.log(indexOfLastPro)
  const indexOfFirstPro = indexOfLastPro - productPerPage;
  console.log(indexOfFirstPro)
  const currentProducts = products.slice(indexOfFirstPro, indexOfLastPro)
  console.log(currentProducts)

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }
  const handlePageChange = function (pageNumber) {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber)
  }
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
                currentProducts.map(ele => (
                  <EachProduct product={ele} />
                ))
              }

            </Row>
          </div>
          <div>
            <div className="d-flex justify-content-center align-items-center s20">
              {/* <PaginationComponents currentPage={currentPage} products={products} productPerPage={productPerPage} paginate={paginate} /> */}
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={9}
                totalItemsCount={products.length}
                pageRangeDisplayed={7}
                onChange={handlePageChange.bind(this)}
              />
            </div>
          </div>
        </ div >
      </Row >

    </div >
  );
}

export default AllProducts;