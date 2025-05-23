import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Cards from './Cards';
import './ProductCarousel.css';

const products = [
  {
    title: "Protini Cream 1",
    price: "$68.00",
    image: "https://cdn.shopify.com/s/files/1/0209/8446/t/147/assets/4cead1fdebdd--Protini-50ml-10072020-Hero.png?v=1602092864",
    hoverImage: "https://cdn.shopify.com/s/files/1/0209/8446/files/Protini-Cream-Hover.png",
    bgColorClass: "bg-pink",
    hoverBgColorClass: "bg-green",
    rating: 4.5,
    tag: "Best Seller"
  },
  {
    title: "Protini Cream 2",
    price: "$68.00",
    image: "https://cdn.shopify.com/s/files/1/0209/8446/files/Protini-2.png",
    hoverImage: "",
    bgColorClass: "bg-yellow",
    hoverBgColorClass: "bg-blue",
    rating: 4.2,
    tag: "Limited"
  },
  {
    title: "Protini Cream 3",
    price: "$68.00",
    image: "https://cdn.shopify.com/s/files/1/0209/8446/files/Protini-3.png",
    hoverImage: "",
    bgColorClass: "bg-blue",
    hoverBgColorClass: "bg-yellow",
    rating: 4.7,
    tag: "New"
  },
  {
    title: "Protini Cream 4",
    price: "$68.00",
    image: "https://cdn.shopify.com/s/files/1/0209/8446/files/Protini-4.png",
    hoverImage: "",
    bgColorClass: "bg-pink",
    hoverBgColorClass: "bg-green",
    rating: 4.6,
    tag: "Best Seller"
  },
  {
    title: "Protini Cream 5",  
    price: "$68.00",
    image: "https://cdn.shopify.com/s/files/1/0209/8446/files/Protini-5.png",  
    hoverImage: "",
    bgColorClass: "bg-purple",  
    hoverBgColorClass: "bg-orange",  
    rating: 4.8,
    tag: "Exclusive"
  },
];

const ProductCarousel = () => {
  return (
    <>
    <div className="relative px-4">
      <p className="c1-heading">skin<span>body hair</span></p>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        className="product-carousel"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Cards product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-6">
        <button className="click-button" >Shop All SkinCare</button>
        </div>
    </div>
    
    </>
  );
};

export default ProductCarousel;
