import React from 'react';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { useState } from 'react';

function Payment(props) {
  const infoBank = [{
    bank: "Ngân hàng Á Châu - ACB chi nhánh Ô Chợ Dừa - Hà Nội",
    stk: "184038419",
    owner: "Trần Văn Anh"
  },{
    bank: "Vietinbank chi nhánhTây Hà Nội",
    stk: "101004283351",
    owner: "Trần Văn Anh"
  }, {
    bank: "Vietcombank chi nhánh Thanh Xuân - Hà Nội",
    stk: "0011004194920",
    owner: "Trần Văn Anh"
  }]
  const [display, setDisplay] = useState("default-extends-hide");
  const [displayBank, setDisplayBank] = useState("default-extends-hide");
  const [bankInfo, setBankInfo] = useState(infoBank[0])

  const handleOnClickFace = () => {
    setDisplay("default-extends")
    setDisplayBank("default-extends-hide")
  }
  const handleOnClickBank = () => {
    setDisplayBank("default-extends")
    setDisplay("default-extends-hide")
  }
  return (
    <div className="wrapper-payment">
      <p>Phương thức thanh toán</p>
      <RadioGroup aria-label="methods" name="methods1" >
        <FormControlLabel onClick={handleOnClickFace} value="face-to-face" control={<Radio />} label="Thanh toán trực tiếp" />
        <p className={display}>
          Sau khi quý khách đặt hàng, chúng tôi sẽ liên hệ lại
          xác nhận và giao hàng cho quý khách tận nhà.
          Khi nhận hàng quý khách sẽ thanh toán cho nhân viên giao hàng.
      </p>

        <FormControlLabel value="banking" onClick={handleOnClickBank} control={<Radio />} label="Chuyển khoản ngân hàng" />
        <div className={displayBank}>
          <p>Lựa chọn ngân hàng và ghi lại thông tin tài khoản để chuyển khoản</p>
          <div className="wrapper-bank d-flex justify-content-space-around">
            <div className="d-flex flex-column align-items-center" onClick={() => setBankInfo(infoBank[0])}>
              <label for="BIDV">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeZFT8Ggr4onxB7L3nQlgw7uuYSksvxlvSLw&usqp=CAU" alt="bidv" />
              </label>
              <input type="radio" id="BIDV" name="gender" value="BIDV" />
            </div>
            <div className="d-flex flex-column align-items-center"  onClick={() => setBankInfo(infoBank[1])}>
              <label for="Viettinbank">
                <img src="https://lh3.googleusercontent.com/PG5lVPQjA6-rWkuP9f35RJJukVCS6xjaBWEYuLmwV8nwkamh_2dGEP8EsImN4yj_j7o" alt="bidv" />
              </label>
              <input type="radio" id="Viettinbank" name="gender" value="Viettinbank" />
            </div>
            <div className="d-flex flex-column align-items-center"  onClick={() => setBankInfo(infoBank[2])}>
              <label for="Vietcombank">
                <img src="https://genk.mediacdn.vn/thumb_w/640/2017/photo-0-1507879905694.jpg" alt="bidv" />
              </label>
              <input type="radio" id="Vietcombank" name="gender" value="Vietcombank" />
            </div>
          </div>
          <div className="mt-3 bg-ddd">
            <div className="p-2">
              <p>Thông tin tài khoản</p>
              <p>{bankInfo.bank}</p>
              <p>{bankInfo.stk}</p>
              <p>Chủ tài khoản: {bankInfo.owner}</p>
            </div>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
}

export default Payment;