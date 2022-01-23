import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import './App.css';

const product_api = "https://dnc0cmt2n557n.cloudfront.net/products.json";

const getProducts = async ()=> {
  return await axios.get(product_api).then(response => response.data)
};

const App = () => {

  const [products, setProducts] = useState([]);
    useEffect(() => {
      getProducts().then(data => {
        setProducts(data);
        console.log(products);
      });

      

    }, []);

  return (
    <div>
      <Header />
      <div className="row">
        <Main />
        <Basket />
        
      </div>
    </div>
  );
}

export default App;
