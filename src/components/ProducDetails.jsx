import React from 'react'
import {useEffect,useState} from 'react'
import { useLocation } from "wouter";






function ProducDetails(props) {
    const {params, products, productCart} = props;
    const [product, setProduct] = useState([]);
    const [location, setLocation] = useLocation();
    
    useEffect(() => {
        const searProduct = products.find(product => product.url === params.product_url);
        searProduct ? setProduct(searProduct) : setLocation("/");
        
    },[
        params.product_url,
        products,
    ]);
  

  return (
    <div>Esto es un produco {product.name}</div>
  )
}

export default ProducDetails