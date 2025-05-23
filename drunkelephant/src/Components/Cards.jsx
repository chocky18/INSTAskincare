import React from 'react';
import './Cards.css';

const Cards = ({ product }) => {
  return (
    <div className="card-wrapper">
      <div className={`card-container ${product.bgColorClass}`} data-hover-bg={product.hoverBgColorClass}>
        <div className="card-tag-wrapper">
          {product.tag && <span className="card-tag">{product.tag}</span>}
        </div>

        <div className="card-image-wrapper">
          <img src={product.image} alt={product.title} className="card-image default-image" />
          {product.hoverImage && (
            <img src={product.hoverImage} alt="hover" className="card-image hover-image" />
          )}
        </div>
      </div>

      {/* Info shown BELOW the card */}
      <div className="card-info">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-price">{product.price}</p>
        <div className="card-rating">
          {'★'.repeat(Math.floor(product.rating))}
          {'☆'.repeat(5 - Math.floor(product.rating))}
          <span className="rating-number">{product.rating}</span>
        </div>
      </div>
       
    </div>
  );
};

export default Cards;
