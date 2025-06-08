import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/index.css'; 
import Logo from '../Assets/Logo.png';

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
          <a href="#">Home</a> |
          <a href="#">About</a> |
          <a href="#">Features</a> |
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;