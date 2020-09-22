import React from 'react';

function EachProduct({ product, loading }) {
  return (
    <div className='col-lg-4 col-md-6 col-sm-6' >
      <div className="product-item bg-f6f6f6 pb-15 ">
        <div className="item-img d-flex justify-content-center">
          <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2FUntitled.png?v=1600496496998" alt="hi" />
        </div>
        <div className="item-info">
          <h2 className="s15 bold">
            <a href="#" className="t1">
              KHÓA ĐÀN GUITAR ACOUSTIC ĐÚC ĐEN KA180
                      </a>
          </h2>
          <h3 className="s20">{product.id}</h3>
        </div>
        <div className="product-over p-3 text-center" >
          <a href="#" className="mr-3">
            <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2Fexpand.png?v=1600500234753" alt="expand" />
          </a>
          <a href="#">
            <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2Fshopping-cart.png?v=1600500241553" alt="cart" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default EachProduct;