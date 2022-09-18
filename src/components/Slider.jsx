import React from 'react'
// slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import './../styles/slider.css'


const Slider = () => {
  return (
    <div className="vh-70">
        <Swiper 
            centeredSlides={true}
            modules={[Pagination,Navigation,Autoplay,EffectFade]}  
            pagination={{clickable: true,}} 
            navigation={true} 
            autoplay={{
                delay: 2200,
                disableOnInteraction: false,
            }} 
            effect="fade" 
            className="mySwiper">
        <SwiperSlide><img src="/img/market1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/market2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/market3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/market4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/market5.jpg" alt="" /></SwiperSlide>
        </Swiper>
    </div>
  )
}


export default Slider;