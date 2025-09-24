// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 indomobil. All rights reserved.</p>
        <div className="social-media">
          <a href="https://maps.google.com/maps?cid=17681333632283423419">
            <i data-feather="map-pin"></i>
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
