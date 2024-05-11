import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css';

export const Recently = ({ prize }) => {
  return (
    <>
    <div className="container-sm flex justify-between py-4">
    <div className='text-left font-semibold text-xl'>Recently Expired Raffles</div>
    </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
      >
         {prize.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title}/>

        </SwiperSlide>
      ))}
      </Swiper>
      
    </>

  );
}

export default Recently;
