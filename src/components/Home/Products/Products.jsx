
import Axios from 'axios';
import React, { useContext } from 'react';
import { store } from 'react-notifications-component';
import { Row } from 'reactstrap';
import { CartContext } from '../../../ContextApi/CartContext';
import { userContext } from '../../../ContextApi/UserContext';

import './Product.css'
function Products({ latestItem }) {
  const { userCart, setUserCart } = useContext(CartContext)
  const { userData } = useContext(userContext)
  const addToCart = item => {
    console.log(item);
    async function postItem() {
      await Axios.post('http://localhost:3000/api/cart', {
        idProduct: item._id,
        amount: 1
      }, {
        headers: { 'x-auth-token': userData.token }
      }).then(res => res.data)
        .then(data => {
          if (data.outOfStock) {
            console.log(data.outOfStock)
            return;
          }
          if (data.invalidToken) {
            store.addNotification({
              title: "Fail!",
              message: "You must login before adding something to cart",
              type: "warning",
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 2000,
                onScreen: true
              }
            })
            return;
          }
          store.addNotification({
            title: "Success!",
            message: "Bạn đã thêm vào giỏ hàng thành công",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true
            }
          })

        }).catch(err => {
          console.log(err)
        })
      const myCart = await Axios.get('http://localhost:3000/api/cart', {
        headers: { 'x-auth-token': userData.token }
      })
      setUserCart(myCart.data.cart)
    }
    postItem();
    console.log(userCart)
  }

  return (
    <section className="product ">
      <div className="container">
        <h1 className="text-uppercase"> Sản Phẩm</h1>
        <div className="row">
          <div className="col-sm-9">

          </div>
          <div className="col-sm-3">
            <ul class="nav nav-pills d-flex justify-content-space-between align-items-center s14 pdetail-tabs-menu">
              <li>Sản phẩm mới</li>
              <li>Sản phẩm nổi bật</li>
            </ul>
          </div>
        </div>

        <Row className="product-bwrap">

          {
            latestItem.map(ele => (
              <div className="each-product col-lg-3 col-md-6 col-sm-6 p-15 " style={{ marginBottom: 65 }}>
                <div className="product-item bg-white pb-15">
                  <div className="item-img d-flex justify-content-center">
                    <img className="img-src" src={ele.img} alt="hi" />
                  </div>
                  <div className="item-info">
                    <h2 className="s15 bold">
                      <a href={`/all-product/${ele.groupInstrument.linkRef}/${ele.linkRef}`} className="t1">
                        {ele.name}
                      </a>
                    </h2>
                    <h3 className="s20">{ele.price}</h3>
                  </div>
                  <div className="product-over p-3 text-center">
                    <a href={`/all-product/${ele.groupInstrument.linkRef}/${ele.linkRef}`} className="mr-3">
                      <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2Fexpand.png?v=1600500234753" alt="expand" />
                    </a>
                    <span onClick={() => addToCart(ele)} className="cursor-pointer">
                      <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2Fshopping-cart.png?v=1600500241553" alt="cart" />
                    </span>
                  </div>
                </div>
              </div>
            ))
          }


        </Row>
      </div>

    </section>
  );
}

export default Products;