import React from 'react';

function Cancelled({ele}) {
  return (

    <div className="each-item_list">
      <div className="d-flex justify-content-space-between">
        <h5>Đàn Guitar</h5>
        <p className="cl-f26522">Đã Hủy</p>
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
        <div className="d-flex justify-content-flex-end">Tổng số tiền : đ.{ele.cart.idProduct.price}</div>
        <div className='d-flex justify-content-space-between'>
          <div className="s12 p-2 m-2">Lý do hủy hàng : 
              </div>
          <div className="d-flex justify-content-space-between">
            <div className="p-2 m-2 pl-4 pr-4 cursor-pointer cl-f26522-background cl-white">Mua lần nữa</div>
            <div className="p-2 m-2 bg-f6f6f6  cursor-pointer">Xem chi tiết đơn hủy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cancelled;