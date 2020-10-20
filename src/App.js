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
import Axios from 'axios';
import { UserConsume, UserProvider } from './ContextApi/UserContext';
import Header from './components/Header/Header';

function App() {
  const [activeSearch, setActiveInput] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [searchItem, setSearchItem] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [cartButton, setCartButton] = useState(false);
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

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
      console.log(tokenRes)
      if (tokenRes.data) {
        const userRes = await Axios.get('http://localhost:3000/login', {
          headers: { 'x-auth-token': token }
        })
        console.log(userRes)
        setUserData({
          token,
          user: userRes.data
        })

      }
    }
    checkLoggedIn()
  }, [])
  const handleClickCart = () => {
    setCartButton(!cartButton);
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

  var header;
  window.addEventListener('scroll', () => {
    header = document.getElementById('header')
    if (window.scrollY > 800) {
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }
  })

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
    console.log(allItems)
    console.log(x);
    const resultSearch = allItems.filter(ele => {
      return ele.name.toLowerCase().indexOf(x.toLowerCase()) !== -1;
    })
    console.log(resultSearch)
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
      <Router>
        <UserProvider value={{ userData, setUserData }}>
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
            />

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
                <Login  />
              </Route>
            </Switch>
          </div>
        </UserProvider>
      </Router>


    </div>
  );
}

export default App;
