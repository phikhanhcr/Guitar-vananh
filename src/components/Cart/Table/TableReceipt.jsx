import React, { useContext } from 'react';
import { Row } from 'reactstrap';
import { CartContext } from '../../../ContextApi/CartContext';
import EachProductReceipt from './EachProduct';
import Puppop from './Pupop';

function TableReceipt(props) {
  const { userCart, setUserCart } = useContext(CartContext)
  console.log(userCart)
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
            {
              userCart.length && userCart.map(ele => (
                <EachProductReceipt ele={ele}/>
              ))
            }
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