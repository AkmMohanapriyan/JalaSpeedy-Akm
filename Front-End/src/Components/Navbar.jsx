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
    <>
    <style>
      {`
      .header {
  background: linear-gradient(to right, #373737, #40A1F0);
  padding: 15px 20px;
  box-shadow: #000000 0px 2px 10px rgba(0, 0, 0, 0.9);
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  box-shadow: #373737 0px 2px 10px rgba(0, 0, 0, 0.9);
}

.logoDiv {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
}

.logoDiv img {
  height: 40px;
  width: 40px;
  object-fit: contain;
}

.logoDiv h3 {
  margin: 0;
  font-weight: 600;
  font-size: 1.5rem;
  color: white;
  white-space: nowrap;
}

.navDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.navDiv nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
  align-items: center;
}

.navDiv nav ul li a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.navDiv nav ul li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btnDiv {
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 0 0 auto;
}

.btnDiv a {
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btnDiv a:first-child {
  color: white;
}

.btnDiv a:first-child:hover {
  background-color: white;
  color: #373737;
}

.btnDiv a:last-child {
  background-color: #f6f6f6;
  color: #373737;
  border: 2px solid black;
  border-radius: 10px;
}

.mobile-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.mobile-menu.show {
  display: flex;
}

@media (max-width: 1200px) {
  .navDiv nav ul {
    gap: 20px;
  }
}

@media (max-width: 992px) {
  .navDiv nav ul {
    gap: 15px;
  }

  .navDiv nav ul li a {
    padding: 6px 12px;
    font-size: 0.9rem;
  }

  .btnDiv a {
    padding: 6px 16px;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .header-row {
    flex-wrap: wrap;
    height: auto;
    min-height: 60px;
  }

  .logoDiv {
    flex: 1;
  }

  .mobile-toggle {
    display: block;
  }

  .mobile-menu .navDiv {
    display: flex;
    width: 100%;
    margin-bottom: 15px;
  }

  .mobile-menu .navDiv nav ul {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .mobile-menu .btnDiv {
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .logoDiv h3 {
    font-size: 1.2rem;
  }

  .mobile-menu .btnDiv {
    flex-direction: column;
    gap: 10px;
  }

  .mobile-menu .btnDiv a {
    width: 120px;
    text-align: center;
  }
}
      `}
    </style>

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

                <li><Link to='/home' onClick={toggleMobileMenu}>Home</Link></li>
                <li><Link to='/about' onClick={toggleMobileMenu}>About</Link></li>
                <li><Link to='/features' onClick={toggleMobileMenu}>Features</Link></li>
                <li><Link to='/contact' onClick={toggleMobileMenu}>Contact</Link></li>

              </ul>
            </nav>
          </div>

          <div className="btnDiv">
            <Link to='/login' onClick={toggleMobileMenu}>Login</Link>
            <Link to='/register' onClick={toggleMobileMenu}>Register</Link>

            {/* <a href="#" onClick={toggleMobileMenu}>Login</a>
            <a href="#" onClick={toggleMobileMenu}>Register</a> */}
          </div>
        </div>
      </div>

    </header>

    </>
  );
};

export default Header;