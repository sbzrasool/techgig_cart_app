import React from 'react';

const Product = (props) => {
  let { product } = props;

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.desc}</p>
      <div>
        {product.currency}
        {product.price}
      </div>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
