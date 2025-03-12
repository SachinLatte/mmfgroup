import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import { Thumbs } from 'swiper/modules';
// import { useState } from 'react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
import Slider from "react-slick";



import Navbar from "../navbar/Navbar";
const Banner = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const settings = {
    customPaging: function(i) {
      return (
        <>
        <a>
          <h1>1</h1>
        </a>
                <a>
                <h1>2</h1>
              </a>
              <a>
                <h1>3</h1>
              </a>
              </>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return <section className="hero-section">
    <Navbar />
    <div>
      {/* <Swiper className="main-banner"
        modules={[Pagination, Autoplay, Thumbs]}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        speed={1200}
        slidesPerView={1}

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
      </Swiper> */}
            <Slider {...settings}>
        <div>
          <img src="src/assets/img/banner.webp" alt="banner image" />
        </div>
        <div>
        <img src="src/assets/img/banner.webp" alt="banner image" />
        </div>
        <div>
        <img src="src/assets/img/banner.webp" alt="banner image" />
        </div>
      </Slider>
    </div>
  </section>
}

export default Banner;