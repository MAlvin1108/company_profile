// src/components/Banner/Banner.jsx
import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight * 0.5;
      const newOpacity = 1 - window.scrollY / maxScroll;

      setOpacity(Math.max(0, newOpacity));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="banner-section">
      <video className="background-video" autoPlay loop muted>
        <source src="/img/indomobil_final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="banner-content" style={{ opacity: opacity }}>
        <h1>WELCOME TO INDOMOBIL</h1>
        <p>we're the biggest electrical motorcycle distribution</p>
      </div>
    </section>
  );
};

export default Banner;
