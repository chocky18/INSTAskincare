import React from 'react';
import './SocialGallery.css';

const images = [
  '/images/user1.jpg',
  '/images/user2.jpg',
  '/images/user3.jpg',
  '/images/user4.jpg',
  '/images/user5.jpg',
  '/images/user6.jpg',
];

const captions = [
  '#barewithus',
  '@drunkelephant',
  '#barewithus',
  '@drunkelephant',
  '#barewithus',
  '@drunkelephant',
];

const SocialGallery = () => {
  const extendedImages = [...images, ...images];
  const extendedCaptions = [...captions, ...captions];

  return (
    <div>
      {/* Image Scroller (no background) */}
      <div className="scroll-section">
        <div className="scroll-track">
          {extendedImages.map((src, index) => (
            <div key={index} className="image-card">
              <img src={src} alt={`user-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Caption Scroller (with background) */}
      <div className="caption-section">
        <div className="scroll-track">
          {extendedCaptions.map((text, index) => (
            <div key={index} className="caption-text">
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialGallery;
