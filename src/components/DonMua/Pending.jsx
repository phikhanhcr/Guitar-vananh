import React from 'react';
import PropTypes from 'prop-types';

Pending.propTypes = {
  
};

function Pending(props) {
  return (
    <div className="each-item_list">
    <div className="d-flex justify-content-space-between">
      <h5>Đàn Guitar</h5>
      <p className="cl-f26522">Đang chờ Shop xác nhận</p>
    </div>
    <div className="d-flex justify-content-space-between p-2">
      <div className="d-flex">
        <div className="img-list-purchase mr-2"
          style={{ backgroundImage: `url("https://vn.yamaha.com/vi/files/guitarmini0_1005x1005_f80c8c2ab4d26cf79ab6ad951fa7d446.jpg")` }}>

        </div>
        <div>
          <p>Đàn guitar acoustic 2018 C14</p>
          <p>Phân loại hàng: Đàn Guitar Acoustic</p>
          <p>x 1</p>
        </div>
      </div>
      <p className="cl-f26522">đ 73.000 Vnd</p>
    </div>
    <div>
      <div className="d-flex justify-content-flex-end">Tổng số tiền : đ.74,000</div>
      <div className='d-flex justify-content-space-between'>
        <div className="s12 p-2 m-2">Sản phẩm sẽ được lên đơn muộn nhất 2-3 ngày sau khi đặt hàng
            </div>
        <div className="d-flex justify-content-space-between">
          <div className="p-2 m-2 pl-4 pr-4 cursor-pointer cl-f26522-background cl-white">Xem chi tiết</div>
          <div className="p-2 m-2 bg-f6f6f6  cursor-pointer">Hủy đơn hàng</div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Pending;