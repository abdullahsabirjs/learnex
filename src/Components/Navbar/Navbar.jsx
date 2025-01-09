import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Black and White Y2k Circle Class Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#programs" onClick={closeMenu}>Programs</a></li>
          <li><a href="#about-us" onClick={closeMenu}>About Us</a></li>
          <li><a href="#campus" onClick={closeMenu}>Campus</a></li>
          <li><a href="#students-review" onClick={closeMenu}>Students Review</a></li>
          <li><a href="#contact-us" className="contact-us" onClick={closeMenu}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
