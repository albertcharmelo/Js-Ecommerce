import { useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Categories from "./components/Categories";
import Feactures from "./components/Feactures";
import Header from "./components/Header";
import SearchSlider from "./components/SearchSlider";
import Slider from "./components/Slider";
import "./styles/home.css";
import "./styles/main.css";
import {getProducts} from './services/index.js'
import DealsofDay from "./components/DealsofDay";
import { Butcher } from "./components/Butcher";
import ImagePromotional from "./components/ImagePromotional";
import ShoppingCart from "./components/ShoppingCart";

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
    <div>
      <SearchSlider products={products}/>
      <ShoppingCart products={productCart}/>
      <header>
        <Header />
        <Slider />
        
      </header>
      <main className="">
        <Feactures/>
        <Categories/>
        <DealsofDay/>
        <Butcher/>
        <ImagePromotional/>
      </main>
    </div>
  );
}

export default App;
