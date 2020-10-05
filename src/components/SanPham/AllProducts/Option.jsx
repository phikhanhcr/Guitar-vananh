import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';

function Option({ onChangeSelect }) {
  
  return (
    <div className="row bg-white shadow m-1 option-product d-flex justify-content-space-between align-items-center ">
      <div className="wrapper-svg p-15">
        <FontAwesomeIcon icon={faThList} className="mr-2" />
        <FontAwesomeIcon icon={faThLarge} className="mr-2" />
      </div>
      <div>
        <select className="p-2" onChange={(e) => onChangeSelect(e.target.value)}>
          <option value>Sắp xếp theo</option>
          <option value="price-ascending">Giá tăng dần</option>
          <option value="price-descending">Giá giảm dần</option>
          <option value="title-ascending">Tên A-Z</option>
          <option value="title-descending">Tên Z-A</option>
          <option value="oldest">Cũ nhất</option>
          <option value="newest">Mới nhẩt</option>
        </select>
      </div>
    </div>
  );
}

export default Option;