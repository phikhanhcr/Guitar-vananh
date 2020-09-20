import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Option(props) {
  return (
    <div className="row bg-f6f6f6 m-1 option-product d-flex justify-content-space-between align-items-center "> 
      <div>
        <FontAwesomeIcon icon={faPhone} className="mr-2" />
        <FontAwesomeIcon icon={faPhone} className="mr-2" />
      </div>
      <div>
        <select>
          <option>Sắp xếp theo</option>
          <option>Giá tăng dần</option>
          <option>Giá giảm dần</option>
          <option>Tên A-Z</option>
          <option>Tên Z-A</option>
          <option>Cũ nhất</option>
          <option>Mới nhẩt</option>
        </select>
      </div>
    </div>
  );
}

export default Option;