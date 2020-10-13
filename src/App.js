import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Container } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SanPham from './components/SanPham/SanPham';
import ProductDetails from './components/SanPham/ProductDetails/ProductDetails';
import New from './components/TinTuc/New';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
function App() {
  const [activeSearch, setActiveInput] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [searchItem, setSearchItem] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [cartButton, setCartButton ] = useState(false);

  const handleClickCart = () => {
    setCartButton(!cartButton);
  }
  let classNameCart = 'home-cart';
  if(cartButton) {
    classNameCart = "home-cart active"
  } else {
    classNameCart = "home-cart"
  }

  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:3000/api/all-product')
        .then(res => res.json())
        .then(data => {
          setAllItems(data);
        }).catch(err => {
          console.log(err);
        })
    }
    fetchData()
  }, [])
  var header;
  window.addEventListener('scroll', () => {
    header = document.getElementById('header')
    if (window.scrollY > 800) {
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }

  })
  let classNames = "search";
  let classNameSearchWrapper = "";
  if (activeSearch) {
    classNames = "search active";
    classNameSearchWrapper = ""
  } else {
    classNames = "search"
    classNameSearchWrapper = "display-none"
  }
  // search
  function searchMethods(x) {
    console.log(allItems)
    console.log(x);
    const resultSearch = allItems.filter(ele => {
      return ele.name.toLowerCase().indexOf(x.toLowerCase()) !== -1;
    })
    console.log(resultSearch)
    setSearchItem(resultSearch)
  }
  const onHandleChangeInput = (e) => {
    const inputValue = e.target.value
    if (inputValue !== "") {
      setInputSearch(inputValue);
      searchMethods(inputValue)
    } else {
      setSearchItem([])
    }

  }

  return (
    <div className="App">
      <Router>

        <div className="header w-100">
          <nav id="header">
            <ul className="container wrapper-header d-flex">
              <div>
                <li>
                  <Link to="/">
                    <img className="logo" src="https://vananhaudio.com/upload/hinhanh/1522634515_logo.png" alt="home" />
                  </Link>
                </li>
              </div>

              <div className="s20">
                <li >
                  <Link to="/">Trang Chủ</Link>
                </li>
                <li>
                  <Link to="/gioi-thieu">Giới thiệu</Link>
                </li>
                <li>
                  <Link to="/san-pham">Sản phẩm</Link>
                </li>
                <li>
                  <Link to="/tin-tuc">Tin tức</Link>
                </li>
                <li>
                  <Link to="/dang-ly-hoc">Đăng ký học</Link>
                </li>
                <li>
                  <Link to="/lien-he">Liên hệ</Link>
                </li>
              </div>
              <div className="d-flex right">
                <li className="mr-3" onClick={() => setActiveInput(!activeSearch)}>
                  <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2Fsearch.png?v=1600474376428" alt="search" />
                </li>
                <li>
                  <div className="cart">
                    <img onClick={handleClickCart} src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2Fhand-bag.png?v=1600474259484" alt="cart" />
                    <div className={classNameCart}>
                      <h5 className="mb-3 text-center t1">Giỏ Hàng: </h5>
                      <div className="wrapper-cart t1 mt-2">
                        <div className="t1 d-flex justify-content-center algin-items-center">
                          <img src="https://thegioidanviet.com/wp-content/uploads/2019/10/dan-guitar-acoustic-nghe-nhan-thuan-dt-03c-1.jpg" alt="img" />
                          <div>
                            <p>Guitar Dáng tròn</p>
                            <p>SL 5 x 2.000.000</p>
                          </div>
                        </div>
                      </div>
                      <div className="t1 mt-2 text-center">
                        TỔNG <strong className="t1 ">8,000,000.00 đ</strong>
                      </div>
                      <div className="t1 text-center">
                        <a href="/gio-hang" class="text-uppercase text-center btn">Xem giỏ hàng</a>
                      </div>
                    </div>
                    
                  </div>

                </li>
              </div>
            </ul>
            <section className={classNames}>
              <div className="d-flex">
                <form className="d-flex">
                  <input type="text" className="pl-2 s14" onChange={onHandleChangeInput} placeholder="Nhập từ khóa tìm kiếm..." />
                  <button className="ml-3 btn btn-light">
                    <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2Fsearch.png?v=1600474376428" alt="search" />
                  </button>
                </form>
              </div>
              <div className={classNameSearchWrapper}>
                {
                  searchItem.length ? searchItem.slice(0, 8).map(ele => (
                    <a href={`/all-product/${ele.groupInstrument.linkRef}/${ele.linkRef}`} className="t1 wrapper-search p-2">
                      <div className="p-1 d-flex justify-content-left align-items-center">
                        <img alt="img" className="mr-2" src={ele.img} />
                        <p className="p-0 m-0 s18">{ele.name}</p>
                      </div>
                    </a>
                  )) : "No items match "
                }
              </div>
            </section>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/gioi-thieu">

            </Route>
            <Route path="/san-pham">
              <SanPham />
            </Route>
            <Route path="/tin-tuc">
              <New />
            </Route>
            <Route path="/dang-ly-hoc">

            </Route>
            <Route path="/video">

            </Route>
            <Route path="/lien-he">

            </Route>
            <Route path="/gio-hang">
                <Cart />
            </Route>

            <Route exact path="/all-product/:group/:product" component={ProductDetails} />
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
