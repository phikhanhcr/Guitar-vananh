import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../ContextApi/UserContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header({
  classNamesInput,
  searchItem,
  activeSearch,
  onHandleChangeInput,
  classNameCart,
  handleClickCart,
  setActiveInput,
  classNameSearchWrapper
}) {
  const { userData, setUserData } = useContext(userContext)
  console.log(userData)

  const onClickLogout = () => {
    setUserData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem('auth-token', '');
  }
      
  return (
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
          {
            userData.user ?
              (
                <li>
                  <Link onClick={onClickLogout} to="#">Log out</Link>
                </li>
              ) :
              (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )
          }

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
      <section className={classNamesInput}>
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

  );
}

export default Header;