import React from "react";
import "./PromoSection.css";

const PromoSection = () => {
  return (
    <div className="promo-container">
      <div className="logo-section">
        <div className="logo-circle">
          <div className="logo-content">
            <p className="established">ESTD</p>
            <div className="elephant-icon">🐘</div>
            <p className="year">2012</p>
            <p className="brand-name">DRUNK ELEPHANT™</p>
          </div>
        </div>
      </div>

      <div className="subscribe-section">
        <h2>sign up and receive<br />15% off your first order</h2>
        <div className="input-group">
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="product-section">
        <img src="product-placeholder.jpg" alt="Bora Barrier Repair Cream" />
        <p className="caption">Bora Barrier™ Repair Cream</p>
      </div>
    </div>
  );
};

export default PromoSection;
