// src/components/Produk/Produk.jsx
import React, { useState } from "react";
import "./Produk.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const produkData = [
  {
    name: [
      "Adora Angelic White",
      "Adora Blue",
      "Adora Galaxy Black",
      "Adora Gunmetal",
      "Adora Mint Green",
      "Adora Sakura Blossom",
    ],
    price: "Rp. 24.750.000",
    description:
      "Motor listrik inovatif yang menggabungkan performa tinggi, kenyamanan maksimal, dan konektivitas canggih, menawarkan pengalaman berkendara ramah lingkungan dengan jarak tempuh hingga 110 km. Dilengkapi garansi baterai 3 tahun dan dukungan jaringan Indomobil, Adora siap menemani perjalanan Anda dengan aman dan berkelanjutan.",
    colors: [
      "/Adora_basic/adora_angelicwhite.png",
      "/Adora_basic/adora_blue.png",
      "/Adora_basic/adora_galaxyblack.png",
      "/Adora_basic/adora_gunmetal.png",
      "/Adora_basic/adora_mintgreen.png",
      "/Adora_basic/adora_sakurablossom.png",
    ],
  },
  {
    name: [
      "Adora Gunmetal livery",
      "Adora Angelic White Livery",
      "Adora Galaxy Black Livery",
      "Adora Ocean Blue Livery",
      "Adora Sakura Blossom Livery",
    ],
    price: "Rp 24.950.000",
    description:
      "Model Adora Livery adalah Desainn lain dari Adora basic dengan tambahan stiker yang menambah aksen elegan pada desain ini",
    colors: [
      "/Adora/Adora_grey.png",
      "/Adora/angelic_white.png",
      "/Adora/galaxy_black.png",
      "/Adora/ocean_blue.png",
      "/Adora/sakura_blossom.png",
    ],
  },
  {
    name: [
      "Tyrano Borneo Green",
      "Tyrano Sanur Beige",
      "Tyrano Semeru Grey",
      "Tyrano Krakatau Blaze",
      "Tyrano Carstensz White",
      "Model Rinjani Grey",
    ],
    price: "Rp 45.000.000",
    description:
      "Terinspirasi dari kekuatan T-Rex dan daya jelajah medan ekstrem, Tyranno adalah motor listrik dari Indomobil eMotor yang dirancang untuk menghadapi segala tantangan jalanan.",
    colors: [
      "/tyrano/green_tyrano.png",
      "/tyrano/beige.png",
      "/tyrano/grey.png",
      "/tyrano/orange.png",
      "/tyrano/white.png",
      "/tyrano/grey2.png",
    ],
  },
];

const Produk = () => {
  const [currentSlide, setCurrentSlide] = useState(produkData.map(() => 0));
  const [currentNames, setCurrentNames] = useState(produkData.map(() => 0));

  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const handleNextSlide = (produkIndex) => {
    setCurrentSlide((prevSlides) => {
      const newSlides = [...prevSlides];
      const produk = produkData[produkIndex];
      newSlides[produkIndex] =
        (prevSlides[produkIndex] + 1) % produk.colors.length;
      return newSlides;
    });
    setCurrentNames((prevNames) => {
      const newNames = [...prevNames];
      const produk = produkData[produkIndex];
      newNames[produkIndex] = (prevNames[produkIndex] + 1) % produk.name.length;
      return newNames;
    });
  };

  const handlePrevSlide = (produkIndex) => {
    setCurrentSlide((prevSlides) => {
      const newSlides = [...prevSlides];
      const produk = produkData[produkIndex];
      newSlides[produkIndex] =
        (prevSlides[produkIndex] - 1 + produk.colors.length) %
        produk.colors.length;
      return newSlides;
    });
    setCurrentNames((prevNames) => {
      const newNames = [...prevNames];
      const produk = produkData[produkIndex];
      newNames[produkIndex] =
        (prevNames[produkIndex] - 1 + produk.name.length) % produk.name.length;
      return newNames;
    });
  };

  return (
    <section id="products" className="produk-section">
      <div ref={ref} className="container-content">
        <h2 className={isVisible ? "is-visible" : ""}>
          Motor Listrik Unggulan
        </h2>
        <div className="produk-grid">
          {produkData.map((produk, index) => (
            <div
              key={index}
              className={`produk-card ${isVisible ? "is-visible" : ""}`}
            >
              <div className="produk-image-container">
                <div
                  className="produk-image-slider"
                  style={{
                    transform: `translateX(-${currentSlide[index] * 100}%)`,
                  }}
                >
                  {produk.colors.map((colorImage, colorIndex) => (
                    <img
                      key={colorIndex}
                      src={colorImage}
                      alt={produk.name[colorIndex]}
                      className="produk-image-slide"
                    />
                  ))}
                </div>
                <button
                  className="color-change-button left"
                  onClick={() => handlePrevSlide(index)}
                >
                  <i data-feather="chevron-left" className="feather-icon"></i>
                </button>
                <button
                  className="color-change-button right"
                  onClick={() => handleNextSlide(index)}
                >
                  <i data-feather="chevron-right" className="feather-icon"></i>
                </button>
              </div>
              <div className="produk-info">
                <h3>{produk.name[currentNames[index]]}</h3>
                <p className="produk-price">{produk.price}</p>
                <p className="produk-description">{produk.description}</p>
                <a
                  href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20motor%20listrik%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <i data-feather="phone" className="feather-icon"></i>
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produk;
