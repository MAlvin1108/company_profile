// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Alvin. All rights reserved.</p>
        <div className="social-media">
          <a href="#">
            <i data-feather="facebook"></i>
          </a>
          <a href="#">
            <i data-feather="instagram"></i>
          </a>
          <a href="#">
            <i data-feather="twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
