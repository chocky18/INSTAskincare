import React, { useState, useEffect } from 'react';
import './ProductHighlight.css';

const ProductHighlight = () => {
  const images = [
    'https://cdn.drunkinlove.com/kit1.jpg', // Replace with your real image URLs
    'https://cdn.drunkinlove.com/kit2.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="highlight-section">
      <div className="highlight-text">
        <p>
          Hit the hydration station with B-Hydra, our hydrating vitamin B serum, and F-Balm, our
          quenching electrolyte mask.
        </p>
        <button className="highlight-button">SHOP</button>
      </div>
      <div className="highlight-image">
        <img src={images[currentIndex]} alt="Product" />
      </div>
    </div>
  );
};

export default ProductHighlight;
