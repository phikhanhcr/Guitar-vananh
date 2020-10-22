import React from 'react';
import { useState } from 'react';

function EachProductReceipt({ele}) {
  const [amount, setAmount] = useState(ele.amount)
  const onChangeInput = e => { 
    console.log(e.target.value)
    setAmount(e.target.value)
  }
  return (
    <tr>
      <th scope="row">1</th>
      <td className="d-flex img-table">
        <img src={ele.idProduct.img} alt="img" />
        <p>{ele.idProduct.name}</p>
      </td>
      <td>
        <input 
          name="amount" 
          type="number" 
          value={amount}
          defaultValue={ele.amount} 
          onChange={onChangeInput}
        />
      </td>
      <td>{ele.idProduct.price}</td>
      <td>{ele.idProduct.price * ele.amount}</td>
      <td className="s20 t1 black">X</td>
    </tr>
  );
}

export default EachProductReceipt;