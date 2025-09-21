// src/components/Banner.jsx
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-section">
      <video className="background-video" autoPlay loop muted>
        <source src="./public/img/indomobil_final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="banner-content">
        <h1>WELCOME TO INDOLOCAL</h1>
        <p>we're the biggest electrical motorcycle distribution</p>
      </div>
    </section>
  );
};

export default Banner;
