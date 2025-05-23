import React from 'react';
import TopBar from '../Components/TopBar';
import ProductCarousel from '../Components/ProductCarousel';
import TwoPanelSection from '../Components/TwoPanelSection';
import VideoSection from '../Components/VideoSection';
import FounderQuote from '../Components/FounderQuote';
import SocialGallery from '../Components/SocialGallery';
import PromoSection from '../Components/PromoSection';
import Footer from '../Components/Footer';
import Chatbot from '../Components/Chatbot'
const Home = () => {
  return (
    <>
      <TopBar />
       <Chatbot/>
      <ProductCarousel />
      <TwoPanelSection />
      <VideoSection />
      <FounderQuote />
      <SocialGallery />
      <PromoSection />
      <Footer />
    </>
  );
};

export default Home;
