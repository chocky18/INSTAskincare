import React from 'react';
import {  Routes, Route } from 'react-router-dom';

 

 
 
import Home from './Components/Home';
import Blogs from './Pages/Blogs';
 

const App = () => {
  return (
     <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<LearnPage />} /> */}
        
      </Routes>
      </>
  );
};

export default App;
