import Axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../ContextApi/UserContext';


function EachPurchase(props) {
  const { userData } = useContext(userContext)
  const [element, setElement] = useState([]);
  useEffect(() => {
    async function fetchDataOrderList(token) {
      await Axios('http://localhost:3000/api/donhang', {
        headers: { 'x-auth-token': token }
      }).then(res => res.data)
        .then(data => {
          setElement(data)
          console.log(data)
        }).catch(err => {
          console.log(err)
        })
    }
    fetchDataOrderList(userData.token)
  }, [userData.token])
  return (
    <>
      {
        element.length && element.map(ele => (

          <div className="each-item_list">
            <div className="d-flex justify-content-space-between">
              <h5>Đàn Guitar</h5>
              <p className="cl-f26522">Đã Giao</p>
            </div>
            <div className="d-flex justify-content-space-between p-2">
              <div className="d-flex">
                <div className="img-list-purchase mr-2"
                  style={{ backgroundImage: `url("https://vn.yamaha.com/vi/files/guitarmini0_1005x1005_f80c8c2ab4d26cf79ab6ad951fa7d446.jpg")` }}>

                </div>
                <div>
                  <p>{ele.cart.idProduct.name}</p>
                  <p>Phân loại hàng: {ele.cart.idProduct.groupInstrument.name}</p>
                  <p>x {ele.cart.amount}</p>
                </div>
              </div>
              <p className="cl-f26522">đ {ele.cart.idProduct.price} Vnd</p>
            </div>
            <div>
              <div className="d-flex justify-content-flex-end">Tổng số tiền : đ. {ele.cart.idProduct.price}</div>
              <div className='d-flex justify-content-space-between'>
                <div className="s12 p-2 m-2">Đánh giá sản phẩm trước
                Đánh giá ngay và nhận 100 Xu
                </div>
                <div className="d-flex justify-content-space-between">
                  <div className="p-2 m-2 pl-4 pr-4 cursor-pointer cl-f26522-background cl-white">Đánh Giá</div>
                  <div className="p-2 m-2 bg-f6f6f6  cursor-pointer">Xem chi tiết đơn hàng</div>
                  <div className="p-2 m-2 bg-f6f6f6 cursor-pointer">Mua lần nữa</div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );

}

export default EachPurchase;