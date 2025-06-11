import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Assets/Logo.png';
import '/src/index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Desktop/Tablet Layout - All in same row */}
        <div className="header-row">

          {/* Left: Logo */}
          <div className="logoDiv">
            <img src={Logo} alt="logo" />
            <h3>JalaSpeedy</h3>
          </div>

          {/* Center: Navigation Links */}
          <div className="navDiv d-none d-md-flex">
            <nav>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Right: Buttons */}
          <div className="btnDiv d-none d-md-flex">
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>

          {/* Mobile Toggle Button */}
          <button className="mobile-toggle d-md-none" onClick={toggleMobileMenu}>
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'show' : ''} d-md-none`}>
          <div className="navDiv">
            <nav>
              <ul>
                <li><a href="#" onClick={toggleMobileMenu}>Home</a></li>
                <li><a href="#" onClick={toggleMobileMenu}>About</a></li>
                <li><a href="#" onClick={toggleMobileMenu}>Features</a></li>
                <li><a href="#" onClick={toggleMobileMenu}>Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="btnDiv">
            <a href="#" onClick={toggleMobileMenu}>Login</a>
            <a href="#" onClick={toggleMobileMenu}>Register</a>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;