import React from "react";
import Slider from "react-slick";
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandsCarousel = ()=>{
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    rtl: false,
    cssEase: 'linear',          
    speed:1800,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  };
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    rtl: true,
    cssEase: 'linear',          
    speed:1800,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  };
return (
  <section className="brands-carousel">
    <h1>Trusted by great companies</h1>
    <div className="brands-container">
      <Slider {...settings} className="mt-5">
        <div className="img-box">
          <img src="src/assets/img/brands/brand1.webp" alt="rentio toor dal img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand2.webp" alt="dawat rice img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand3.webp" alt="goldiee masale img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand4.webp" alt="kalakari img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand5.webp" alt="jalani img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand6.webp" alt="salsalito img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand7.webp" alt="micks img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand8.webp" alt="happilo img" />
        </div>
      </Slider>
    </div>
    <div className="custom-container mt-80">
      <Slider1 {...settings1} >
        <div className="img-box">
          <img src="src/assets/img/brands/brand1.webp" alt="rentio toor dal img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand2.webp" alt="dawat rice img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand3.webp" alt="goldiee masale img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand4.webp" alt="kalakari img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand5.webp" alt="jalani img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand6.webp" alt="salsalito img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand7.webp" alt="micks img" />
        </div>
        <div className="img-box">
          <img src="src/assets/img/brands/brand8.webp" alt="happilo img" />
        </div>
      </Slider1>
    </div>
  </section>
);
}
export default BrandsCarousel;