// src/components/AboutUs/AboutUs.jsx
import React from "react";
import "./AboutUs.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const AboutUs = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2, // Mulai animasi saat 20% elemen terlihat
  });

  return (
    <section id="about-us" className="about-us">
      <div
        ref={ref}
        className={`about-us-container ${isVisible ? "is-visible" : ""}`}
      >
        <div className="about-us-content">
          <h2 className={isVisible ? "is-visible" : ""}>About Us</h2>
          <p className={isVisible ? "is-visible" : ""}>
            Website ini adalah website resmi indomobil pada cabang undaan
            Surabaya yang merupakan pelopor distribusi sepeda motor listrik
            khusus untuk daerah surabaya dan sekitarnya. Misi kami adalah
            menghadirkan solusi transportasi ramah lingkungan yang tidak hanya
            efisien dan bertenaga, tetapi juga terjangkau untuk setiap lapisan
            masyarakat. Kami berkomitmen penuh untuk mendorong perubahan menuju
            masa depan yang lebih hijau, satu motor listrik pada satu waktu.
          </p>
          <p className={isVisible ? "is-visible" : ""}>
            Dengan pengalaman lebih dari satu dekade di industri, kami bangga
            menjadi mitra terpercaya dalam perjalananmu menuju mobilitas masa
            depan. Bergabunglah bersama kami, dan rasakan pengalaman berkendara
            yang tak tertandingi dengan motor listrik berkualitas dari
            Indolocal.
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="/img/logo2.jpeg"
            alt="Indolocal Logo"
            className={isVisible ? "is-visible" : ""}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
