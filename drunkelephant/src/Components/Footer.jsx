import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>SKINCARE</h4>
          <ul>
            <li>Moisturizers</li>
            <li>Serums</li>
            <li>Masks + Treatments</li>
            <li>Cleansers</li>
            <li>Sun Protection</li>
            <li>Eyes + Lips</li>
            <li>Travel</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>HAIR CARE</h4>
          <ul>
            <li>Shampoos</li>
            <li>Conditioners</li>
            <li>Treatments</li>
            <li>Leave-In + Styling</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>BODY CARE</h4>
          <ul>
            <li>Cleansers</li>
            <li>Lotions</li>
            <li>Exfoliants + Scrubs</li>
            <li>Deodorants</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>MISC</h4>
          <ul>
            <li>Best Sellers</li>
            <li>Gifts</li>
            <li>Kits & Bundles</li>
            <li>Drunk Life</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>LEARN</h4>
          <ul>
            <li>Philosophy</li>
            <li>Our Story</li>
            <li>Smoothie Glossary</li>
            <li>The Drunk Mag</li>
            <li>Press</li>
            <li>Voluntary Recall</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CONNECT</h4>
          <ul>
            <li>Contact Us</li>
            <li>Stores</li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
            <li>Careers</li>
            <li>Get $20 Off</li>
            <li>Check Gift Card Balance</li>
          </ul>
          <div className="footer-socials">
            <span>🔵</span>
            <span>🐦</span>
            <span>📸</span>
            <span>🎵</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      <div className="footer-links">
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/terms-and-conditions">Terms & Conditions</Link>
       <Link to="/do-not-sell">Do Not Sell or Share My Personal Information</Link>
     </div>
        <div className="footer-right">
          <p>©2025 Drunk Elephant</p>
          <div className="region-selector">
            <select>
              <option>United States</option>
              <option>Canada</option>
              <option>UK</option>
              <option>Australia</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
