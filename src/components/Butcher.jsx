import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay  } from 'swiper';
import {Product} from './Product';




export const Butcher = () => {
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
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                
                <SwiperSlide><Product/></SwiperSlide>
                <SwiperSlide><Product/></SwiperSlide>
                <SwiperSlide><Product/></SwiperSlide>
                <SwiperSlide><Product/></SwiperSlide>
                <SwiperSlide><Product/></SwiperSlide>
                <SwiperSlide><Product/></SwiperSlide>
                <SwiperSlide><Product/></SwiperSlide>
                <SwiperSlide><Product/></SwiperSlide>
                <SwiperSlide><Product/></SwiperSlide>

              
            </Swiper>
        </div>
        

    </div>
  )
}
