import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Thumbs } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



import Navbar from "../navbar/Navbar";
const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return <section className="hero-section">
    <Navbar />
    <div>
      <Swiper className="main-banner"
        modules={[Pagination, Autoplay, Thumbs]}
        pagination={{ clickable: true }}
        // navigation
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        speed={1200}
        slidesPerView={1}
      // autoplay={{ delay: 2000 }}
      // autoplay= {{delay : 2000, disableOnInteraction : false}}
      >
        <SwiperSlide>
          <div className='text-center'>
            <img src="src/assets/img/banner.webp" alt="banner image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='text-center'>
            <img src="src/assets/img/banner.webp" alt="banner image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='text-center'>
          <img src="src/assets/img/banner.webp" alt="banner image" />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper className="main-paginations"
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        slidesPerView={3}
      >
        <SwiperSlide className='item-wide'>
          <div className="swiper-custom-navigation">
            1
          </div>
        </SwiperSlide>
        <SwiperSlide className='item-wide'>
          <div className="swiper-custom-navigation">
            2
          </div>
        </SwiperSlide>
        <SwiperSlide className='item-wide'>
          <div className="swiper-custom-navigation">
            3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
}

export default Banner;