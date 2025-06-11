import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/index.css'; 
import Logo from '../Assets/Logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-header">
        <div className="footer-content">
          <p>&copy; 2025 JalaSpeedy. All rights reserved.</p>
        </div>

        <div className="logoDiv">
          <img src={Logo} alt="JalaSpeedy Logo" />
          <h3>JalaSpeedy</h3>
        </div>

        <div className="footer-links">

          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>

        </div>

      </div>
    </footer>
  );
};

export default Footer;