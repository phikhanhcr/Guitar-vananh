import React from 'react';

function Pagination({products, productPerPage, paginate, currentPage }) {
  console.log(currentPage)
  var arr = [];
  for(let i = 1; i <= Math.ceil(products.length / productPerPage) ; i++ ) {
    arr.push(i)
  }
  if(arr.length > 7 ) {
    
  }

  
  return (
    <div>
      <ul className="pagination">
        {
          arr.length && arr.map(ele => (
            <li className="page-item">
              <a href="#" onClick={() => paginate(ele)} className='page-link'>
                {ele}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Pagination;