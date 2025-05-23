import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingBag, FiMapPin } from 'react-icons/fi';
import './Navbar.css';
// import logo from '../assets/Catlogo3.jpeg';
import logo from '../assets/vectorized.svg';



const Navbar = () => {
  return (
    <>
      <div className="top-bar">
        Complimentary 2-day shipping on all orders $75+!
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        <ul className="navbar-links">
          <li className='nav-01'><Link to="/shop">Shop</Link></li>
          <li className='nav-02'><Link to="/contact">Learn</Link></li>
          <li className='nav-02'><Link to="/blogs">Blogs</Link></li>

        </ul>

        <div className="navbar-icons">
          <Link to="/cart" className="icon-link"><FiMapPin /></Link>
          <Link to="/search" className="icon-link"><FiSearch /></Link>
          <Link to="/account" className="icon-link"><FiUser /></Link>
          <Link to="/cart" className="icon-link"><FiShoppingBag /></Link>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
