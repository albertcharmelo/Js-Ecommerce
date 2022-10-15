import React from 'react'
import Product from './Product'
import { useState,useEffect } from 'react';


const DealsofDay = ({products}) => {
  const [dealsProducts, setDealsProducts] = useState([]);


  useEffect(() => {
    
    
    const productsDeals = products.slice(0,4);
    if(productsDeals.length > 0) setDealsProducts(productsDeals);
  }, [products])
  
  
  return (
    <div className='container'>
        <div className="deals__container mb-5 mt-5">
            <h2 className='deals_title h2'> Ofertas del día</h2>
            
            <div className="deals__container__products pl-4 pr-4 d-flex gap-5 justify-center">
                {dealsProducts.length > 0 ? dealsProducts.map((value, index, array) => {
                    return <Product product={value} key={index} />

                }) : <p className='text-center'>No hay orfetas actualmente</p>}
            </div>
        
        </div>    
    </div>
  )
}

export default DealsofDay