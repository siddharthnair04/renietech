import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css';
import {Button} from "./ui/button";

export const Popular = ({ prize }) => {
  return (
    <>
    <div className="container-sm flex justify-between py-4">
    <div className='text-left font-semibold text-xl'>Popular prizes</div>
      <div className='object-right show-all'><Button>Show All</Button></div>
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
      <div className="py-2"></div>
      <div className='bg-gradient-custom-04 items-stretch flex flex-col justify-center px-2 py-2 rounded-xl'>
        <div className=' justify-between items-stretch flex gap-5 px-0.5'>
          <div className='flex grow basis-[0%] flex-col items-stretch leading-6' id='some'>
            <div className='mt-2 px-2 w-[150px] text-center text-blue-500 text-left text-xl font-medium uppercase whitespace-nowrap bg-white justify-center items-stretch leading-6 rounded-sm'>Lets Start</div>
            <div className='text-white text-left text-md font-medium uppercase whitespace-nowrap leading-4 mt-1.5'> Locate your nearest <br /> Renie Bin!</div>
            <img src="src/assets/pin.svg" alt="img" className='bin'/>
          </div>
        </div>
      </div>
    </>

  );
}

export default Popular;
