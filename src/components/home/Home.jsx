import React from 'react';
import Banner from "./Banner";
import CounterSection from "./CounterSection";
import BrandsCarouselComponent from './BrandsCarouselComponent';
import NetworkHomePage from './NetworkHomepage';
const Home = () => {
  return <>
    <Banner />
    <CounterSection />
    <BrandsCarouselComponent/>
    <NetworkHomePage/>
  </>
}
export default Home;