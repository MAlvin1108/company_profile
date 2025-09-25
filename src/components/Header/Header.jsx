// src/components/Header/Header.jsx
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container-header">
        <img src="/img/logo.png" alt="Indolocal Logo" />

        {/* Tombol Hamburger/Close untuk Mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <i
            data-feather={isMenuOpen ? "x" : "menu"}
            className="feather-icon menu-icon"
          ></i>
        </button>

        {/* Navigation Links: Menggunakan class dinamis untuk tampilan mobile */}
        <nav className={isMenuOpen ? "nav-open" : ""}>
          <ul>
            <li>
              <a href="#about-us" onClick={toggleMenu}>
                About Us
              </a>
            </li>
            <li>
              <a href="#keunggulan" onClick={toggleMenu}>
                Keunggulan
              </a>
            </li>
            <li>
              <a href="#products" onClick={toggleMenu}>
                Produk
              </a>
            </li>
            <li>
              <a href="#reviews" onClick={toggleMenu}>
                Review
              </a>
            </li>
            <li>
              <a href="#Lokasi" onClick={toggleMenu}>
                Lokasi
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
