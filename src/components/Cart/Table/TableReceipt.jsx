import React from 'react';
import { Row } from 'reactstrap';

function TableReceipt(props) {
  return (
    <Row className="rowTable"> 
      <div className="col-lg-9 col-sm-12 ">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Item</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              <th scope="col">Total Money</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td className="d-flex img-table">
                <img src="https://nhaccuphutho.vn/wp-content/uploads/2020/05/Guitar-Acoustic-Yamaha-FS800.jpg" alt="img" />
                <p>Dan Guitar Acoustic</p>
              </td>
              <td>
                <input type="number" defaultValue="5" />
              </td>
              <td>1000000</td>
              <td>50000000</td>
              <td className="s20 t1 black">X</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-lg-3 col-sm-12 details-receipt d-flex flex-column">
        <div className="wrapper-details">
          <h3 className="pl-3 s20">CHI TIẾT HÓA ĐƠN</h3>
          <section className="d-flex flex-column justify-content-space-around">
            <div>
              <p className="bold">Chi phí hàng hóa</p>
              <p>4000000</p>
            </div>
            <div>
              <p className="bold">Chi phí vận chuyển</p>
              <p>
                Phí ship sẽ được tính tùy theo địa chỉ của khách hàng.
                (Nếu quý khách yêu cầu đặt theo COMBO thì nhắn vào phần
                ghi chú cho shop biết nhé)
                </p>
            </div>
            <div>
              <p className="bold">Thành Tiền</p>
              <p>4000000</p>
            </div>
          </section>
        </div>

      </div>

    </Row>
  );
}

export default TableReceipt;