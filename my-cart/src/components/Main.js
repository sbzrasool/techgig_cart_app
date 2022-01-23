import React from 'react';
import Product from './Product';

const Main = (props) => {
  let { products } = props;
  console.log('props', products);

  return (
    <main className='block col-2'>
      <h2>Products</h2>
      <div className='row'>
        {products.length > 0 &&
          products.map((item, index) => <Product key={index} product={item} />)}
      </div>
    </main>
  );
};

export default Main;
