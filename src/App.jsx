import { useEffect, useState } from "react";
import "./styles/home.css";
import "./styles/main.css";
import {getProducts, getOrder} from './services/index.js'
import Home from "./components/Home";
import ProducDetails from "./components/ProducDetails";
import { Route } from "wouter";


import {v4} from 'uuid';

function App() {
  const [products, setProducts] = useState([]);
  const [productCart, setProductCart] = useState([]);
  const [error,setError] = useState(null);
  
  
  
  useEffect(() => {
    getProducts().then(({error,products}) => {
      if(error) setError(error);
      setProducts(products);
    });

    
  },[]);


  return (
    <>
      <Route path="/">
        <Home products={products} productCart={[productCart, setProductCart]} />
      </Route>
      <Route path="/product/:product_url">
         { (params) => <ProducDetails params={params} products={products} productCart={[productCart, setProductCart]} />} 
      </Route>

    </>
  );
}

export default App;


