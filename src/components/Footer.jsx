import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Reiki Tirth</h3>
            <p>Healing Through Reiki Energy</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/9893567595" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/what-is-reiki">Reiki Healing</Link></li>
              <li><Link to="/classes">Reiki Classes</Link></li>
              <li><Link to="/products">Reiki Products</Link></li>
              <li><Link to="/contact">Consultation</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Reiki Tirth. All rights reserved.</p>
          <p>Created by Digital Atharva 360° "Praveen Yadav"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;