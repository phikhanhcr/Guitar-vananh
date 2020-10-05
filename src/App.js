import React, { useState } from 'react';
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
function App() {
  const [activeSearch, setActiveInput] = useState(false);
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
  if (activeSearch) {
    classNames = "search active";
  } else {
    classNames = "search"
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

              <div>
                <li>
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
                  <Link to="/giao-hang">
                    <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2Fhand-bag.png?v=1600474259484" alt="cart" />
                  </Link>

                </li>
              </div>
            </ul>
            <section className={classNames}>
              <div className="d-flex">
                <form className="d-flex">
                  <input type="text" className="pl-2 s14" placeholder="Nhập từ khóa tìm kiếm..." />
                  <button className="ml-3 btn btn-light">
                    <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2Fsearch.png?v=1600474376428" alt="search" />
                  </button>
                </form>
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
            <Route  path="/san-pham">
              <SanPham />
            </Route>
            <Route path="/tin-tuc">

            </Route>
            <Route path="/dang-ly-hoc">

            </Route>
            <Route path="/video">

            </Route>
            <Route path="/lien-he">

            </Route>
            <Route path="/giao-hang">

            </Route>
            <Route path="/acoustic">
              <div>asdasdasd</div>
            </Route>
            <Route exact path="/all-product/:group/:product" component={ProductDetails} />

          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
