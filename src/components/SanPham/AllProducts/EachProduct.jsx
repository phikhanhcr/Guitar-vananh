import React from 'react';

function EachProduct({ product }) {

  return (
    <div className='col-lg-4 col-md-6 col-sm-6' >
      <div className="product-item bg-f6f6f6 pb-15 ">

        <a href={`/product/${product.groupInstrument.linkRef}/${product.linkRef}`} className="link-ref t1">
        <div className="item-img d-flex justify-content-center">
          <img src="https://cdn.glitch.com/10c9d348-7ac9-4866-a5e9-597207407019%2FUntitled.png?v=1600496496998" alt="hi" />
        </div>
        </a>
        
        <div className="item-info">
          <h2 className="s15 bold t1">
            <a href={`/product/${product.groupInstrument.linkRef}/${product.linkRef}`} className="link-ref t1">
              {product.name}
            </a>
          </h2>
          <h3 className="t1 s20">{product.price}</h3>
        </div>


        <div className="product-over p-3 text-center" >
          <a href={`/product/${product.groupInstrument.linkRef}/${product.linkRef}`} className="mr-3">
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