import React, { useContext  } from 'react';
import { Row } from 'reactstrap';
import { CartContext } from '../../../ContextApi/CartContext';
import EachProductReceipt from './EachProduct';


function TableReceipt(props) {
  const { userCart } = useContext(CartContext)
  const totalMoney = userCart.reduce((a, b) => {
    return a + b.amount * b.idProduct.price
  }, 0)

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
              userCart.length && userCart.map((ele, index) => (
                <EachProductReceipt ele={ele} key={index}/>
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
              <p>{totalMoney}</p>
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
              <p> {totalMoney} </p>
            </div>
          </section>
        </div>

      </div>

    </Row>
  );
}

export default TableReceipt;