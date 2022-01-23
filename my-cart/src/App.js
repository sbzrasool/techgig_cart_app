import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import './App.css';
import { getProducts } from './services/products';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((resp) => {
      setProducts(resp.products);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className='row'>
        <Main products={products} />
        <Basket />
      </div>
    </div>
  );
};

export default App;
