// src/components/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container-header">
        <img src="./public/img/logo.png" alt="Indolocal Logo" />
        <nav>
          <ul>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#keunggulan">Keunggulan</a>
            </li>
            <li>
              <a href="#products">Produk</a>
            </li>
            <li>
              <a href="#reviews">Review</a>
            </li>
            <li>
              <a href="#contact-us">Kontak</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
