import React, { useState, useEffect } from 'react';
import './TopBar.css';
import logo from '../assets/logo-02.png';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const promoImages = [
    "https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2021/03/TOB-DRUNK-ELEPHANT-1.jpg?w=2640",
    "https://media.timeout.com/images/105473507/image.jpg"
  ];

  const productImages = [
    "https://static.thcdn.com/images/large/original/productimg/1600/1600/13344888-3864989243160542.jpg",
    "https://img.ltwebstatic.com/images3_spmp/2023/11/02/c0/1698911535b8cd1b9efa7b11d6d291842a74389ed0_thumbnail_900x.jpg"
  ];

  const [promoIndex, setPromoIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    const promoInterval = setInterval(() => {
      setPromoIndex(prev => (prev + 1) % promoImages.length);
    }, 3000);

    const productInterval = setInterval(() => {
      setProductIndex(prev => (prev + 1) % productImages.length);
    }, 3000);

    return () => {
      clearInterval(promoInterval);
      clearInterval(productInterval);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="nav-section">
        <div className="nav-container">
          <div className="product-container">
            
            {/* Left: Promo Image */}
            <div className="product-card">
              <img
                src={promoImages[promoIndex]}
                alt="Promotional Banner"
                className="sliding-image"
              />
            </div>

            {/* Right: Text + Product Image */}
            <div className="highlight-container">
              <div className="highlight-text-section">
                <p>
                  Hit the hydration station with B-Hydra, our hydrating vitamin B serum, and F-Balm, our
                  quenching electrolyte mask.
                </p>
                <button className="highlight-button">SHOP</button>
              </div>
              <div className="highlight-image-section">
                <img src={productImages[productIndex]} alt="Highlighted Product" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
