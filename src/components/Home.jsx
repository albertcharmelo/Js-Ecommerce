import React from "react";
import { Butcher } from "./extras/Butcher";
import SearchSlider from "./extras/SearchSlider";
import ShoppingCart from "./extras/ShoppingCart";
import Header from "./extras/Header";
import Slider from "./extras/Slider";
import Feactures from "./extras/Feactures";
import Categories from "./extras/Categories";
import DealsofDay from "./extras/DealsofDay";
import ImagePromotional from "./extras/ImagePromotional";



const Home = (props) => {
  return (
    <>
      <SearchSlider products={props.products} />
      <ShoppingCart  />
      <header>
        <Header />
        <Slider />
      </header>
      <main className="">
        <Feactures />
        <Categories />
        <DealsofDay products={props.products}  />
        <Butcher
          products={props.products}
         
        />
        <ImagePromotional />
      </main>
    </>
  );
};

export default Home;
