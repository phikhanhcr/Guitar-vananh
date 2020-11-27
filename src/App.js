import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Container } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import SanPham from './components/SanPham/SanPham';
import ProductDetails from './components/SanPham/ProductDetails/ProductDetails';
import New from './components/TinTuc/New';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Axios from 'axios';
import { UserProvider } from './ContextApi/UserContext';
import Header from './components/Header/Header';
import Introduce from './components/Introduce/Introduce';
import Contact from './components/Contact/Contact';
import Registration from './components/ResgisterStudent/Registration';
import { CartProvider, CartConsume } from './ContextApi/CartContext'
import { scrollScreen } from './Middleware/ScrollScreen';
import ReactNotification from 'react-notifications-component'
import DonDaMua from './components/DonMua/DonDaMua';
import { OrderProvider } from './ContextApi/OrderContext';


function App() {
  const [activeSearch, setActiveInput] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [searchItem, setSearchItem] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [cartButton, setCartButton] = useState(false);
  const [listOrder, setListOrder] = useState([]);
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })
  const [userCart, setUserCart] = useState([])
  // get cat from api 


  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token')
      if (!token) {
        token = "";
        localStorage.setItem('auth-token', "");
      }
      const tokenRes = await Axios.post('http://localhost:3000/login/isValidToken', null, {
        headers: { 'x-auth-token': token }
      })
      if (tokenRes.data) {
        const userRes = await Axios.get('http://localhost:3000/login', {
          headers: { 'x-auth-token': token }
        })
        setUserData({
          token,
          user: userRes.data
        })
        
        if (userRes.data) {
          const myCart = await Axios.get('http://localhost:3000/api/cart', {
            headers: { 'x-auth-token': token }
          })
          if (myCart.data) {
            setUserCart(myCart.data.cart)
          } else {
            setUserCart([])
          }
          fetchDataOrderList(token);
        }
      }
    }
    checkLoggedIn()
  }, [])

  // all order pending, cancelled, shipping
  async function fetchDataOrderList(token) {
    await Axios.get('http://localhost:3000/api/donhang/myOrder', {
      headers: { 'x-auth-token': token }
    }).then(res => res.data)
      .then(data => {
        console.log(data)
        setListOrder(data)
      }).catch(err => {
        console.log(err)
      })
  }
  const handleClickCart = () => {
    setCartButton(!cartButton);
    setActiveInput(false)
  }
  const handleClickSearch = () => {
    setActiveInput(!activeSearch)
    setCartButton(!true);
  }
  let classNameCart = 'home-cart';
  if (cartButton) {
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

  scrollScreen();

  let classNamesInput = "search";
  let classNameSearchWrapper = "";
  if (activeSearch) {
    classNamesInput = "search active";
    classNameSearchWrapper = ""
  } else {
    classNamesInput = "search"
    classNameSearchWrapper = "display-none"
  }
  // search
  function searchMethods(x) {

    const resultSearch = allItems.filter(ele => {
      return ele.name.toLowerCase().indexOf(x.toLowerCase()) !== -1;
    })

    setSearchItem(resultSearch)
  }
  //  search Item
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
      <ReactNotification />
      <Router>
        <UserProvider value={{ userData, setUserData }}>
          <CartProvider value={{ userCart, setUserCart }}>
            <div className="header w-100">
              <Header
                onHandleChangeInput={onHandleChangeInput}
                handleClickCart={handleClickCart}
                setActiveInput={setActiveInput}
                classNameSearchWrapper={classNameSearchWrapper}
                classNameCart={classNameCart}
                activeSearch={activeSearch}
                searchItem={searchItem}
                classNamesInput={classNamesInput}
                handleClickSearch={handleClickSearch}
              />

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>

                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/gioi-thieu">
                  <Introduce />
                </Route>
                <Route path="/san-pham">
                  <SanPham />
                </Route>
                <Route path="/tin-tuc">
                  <New />
                </Route>
                <Route path="/dang-ly-hoc">
                  <Registration />
                </Route>
                <Route path="/video">

                </Route>
                <Route path="/lien-he">
                  <Contact />
                </Route>
                <Route path="/gio-hang">
                  <Cart />
                </Route>

                <OrderProvider value={{ listOrder, setListOrder }}>
                  <Route exact path="/don-mua">
                    <DonDaMua />
                  </Route>
                </OrderProvider>

                <Route exact path="/all-product/:group/:product" component={ProductDetails} />
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            </div>
          </CartProvider>
        </UserProvider>
      </Router>


    </div>
  );
}

export default App;
