import React from 'react'
import Product from './Product'

const DealsofDay = () => {
  return (
    <div className='container'>
        <div className="deals__container mb-5 mt-5">
            <h2 className='deals_title h2'> Ofertas del día</h2>
            
            <div className="deals__container__products pl-4 pr-4 d-flex gap-5 justify-center">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        
        </div>    
    </div>
  )
}

export default DealsofDay