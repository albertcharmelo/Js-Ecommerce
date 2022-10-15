import React from 'react'
import { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay  } from 'swiper';
import {Product} from './Product';




export const Butcher = ({products}) => {
    const [butcherProducts, setButcherProducts] = useState([]);
    useEffect(() => {
        //take the last 4 products
        const productsButcher = products.slice(-4);
        //add the products to the state
        setButcherProducts(productsButcher);
    }, [products])


  return (
    <div className='p-5 mt-4 container'>
        <h1 className='text-center h2 categories__title mb-5'>Nuestra Carniceria </h1>
        <div className="butcher__slider__container">
        
            <Swiper
                modules={[Autoplay,]}
                
                
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={4}
                >
                
                {butcherProducts.length > 0 ? butcherProducts.map((value, index, array) => {
                    return (
                        <SwiperSlide key={index}>
                            <Product product={value} />
                        </SwiperSlide>
                    )
                }) : <p className='text-center'>No hay productos actualmente</p>}
            </Swiper>

                  

        </div>
        

    </div>
  )
}
