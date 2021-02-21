import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import './AllProducts.css'
import Option from './Option';
import BannerProduct from './BannerProduct';

import EachProduct from './EachProduct';
import Pagination from 'react-js-pagination'
import { sortingDataFollowOption } from '../../../Middleware/SortData'
import Catalogs from './Catalogs';

function AllProducts(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [catalogs, setCatalogs] = useState([]);
  const [productPerPage, setProductPerPage] = useState(9);
  const [optionSorting, setOptionSorting] = useState('price');
  const [ascendingChecking, setAscendingChecking] = useState(true);
  const [linkRefGroup, setLinkRefGroup] = useState('');
  console.log("Hello world")
  useEffect(() => {
    async function fetchData() {
      await fetch('/api/catalogs')
        .then(res => res.json())
        .then(data => {
          setCatalogs(data)
        })
        .catch(err => {
          console.log(err)
        })
      //await fetch('')
    }
    fetchData()
  }, [])
  
  // get products follow the given Group link reference
  useEffect(() => {
    async function fetchData() {
      await fetch(`/api/all-product/${linkRefGroup}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setProducts(data)
          setLoading(false)
        }).catch(err => {
          console.log(err)
        })
    }
    fetchData()
  }, [linkRefGroup])

  

  // find first element's index and last element's index ()
  const indexOfLastPro = currentPage * productPerPage; // 9
  const indexOfFirstPro = indexOfLastPro - productPerPage; // 0
  const currentProducts = products.slice(indexOfFirstPro, indexOfLastPro)
  console.log(currentProducts)


  const handlePageChange = function (pageNumber) {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber)
  }

  const onChangeSelect = (value) => {
    console.log(value);
    switch (value) {
      case 'price-ascending':
        setOptionSorting("id");
        setAscendingChecking(true);
        break;
      case "price-descending":
        setOptionSorting("id");
        setAscendingChecking(false);
        break;
      case "title-ascending":
        setOptionSorting("name");
        setAscendingChecking(true);
        break;
      case "title-descending":
        setOptionSorting("name");
        setAscendingChecking(false);
        break;
      case "newest":
        setOptionSorting("createdAt");
        setAscendingChecking(true);
        break;
      case "oldest":
        setOptionSorting("createdAt");
        setAscendingChecking(false);
        break;
      default:
        setOptionSorting("price");
        setAscendingChecking(true);
    }
    console.log(optionSorting, ascendingChecking)
  }
  const handleGroup = (linkRef) => {
    console.log(linkRef)
    setLinkRefGroup(linkRef)
  }
  
  return (
    // left
    <div className="container">
      <BannerProduct />
      <Row>
        <Catalogs catalogs={catalogs} groupFunc={handleGroup} />

        {/* Right */}
        < div className="col-lg-9 col-md-8 col-sm-12" >
          <Option onChangeSelect={onChangeSelect} />
          <div className='product-wrap'>
            <Row>
              {
                sortingDataFollowOption(currentProducts, optionSorting, ascendingChecking).map(ele => (
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