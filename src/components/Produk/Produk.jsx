// src/components/Produk/Produk.jsx
import React, { useState } from "react";
import "./Produk.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const produkData = [
  {
    name: "Model Adora Basic",
    price: "Rp. 34.000.000",
    description:
      "Model Adora Basic adalah pilihan sempurna untuk penggunaan sehari-hari di perkotaan. Desainnya ramping dan ringan, memudahkan manuver di jalanan padat. Baterai tahan lama dan pengisian cepat menjamin mobilitas tanpa batas.",
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
    name: "Model Adora Livery",
    price: "Rp 35.000.000",
    description:
      "Model Adora Livery adalah Desainn lain dari Adora basic dengan tambahan stiker yang menambah aksen elegan pada desain ini",
    colors: [
      "/Adora/Adora_grey.png", // Warna default
      "/Adora/angelic_white.png",
      "/Adora/galaxy_black.png",
      "/Adora/ocean_blue.png",
      "/Adora/sakura_blossom.png",
    ],
  },
  {
    name: "Model Tyrano",
    price: "Rp 45.000.000",
    description:
      "Model Tyrano adalah motor listrik bertenaga tinggi untuk mereka yang mencari performa maksimal. Dengan akselerasi luar biasa dan jarak tempuh lebih jauh, motor ini siap menemani petualangan di luar kota.",
    colors: [
      "/tyrano/green_tyrano.png", // Warna default
      "/tyrano/beige.png",
      "/tyrano/grey.png",
      "/tyrano/orange.png",
      "/tyrano/white.png",
      "tyrano/grey2.png",
    ],
  },
];

const Produk = () => {
  const [currentColors, setCurrentColors] = useState(produkData.map(() => 0));

  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const handleNextColor = (produkIndex) => {
    setCurrentColors((prevColors) => {
      const newColors = [...prevColors];
      const produk = produkData[produkIndex];
      newColors[produkIndex] =
        (prevColors[produkIndex] + 1) % produk.colors.length;
      return newColors;
    });
  };

  const handlePrevColor = (produkIndex) => {
    setCurrentColors((prevColors) => {
      const newColors = [...prevColors];
      const produk = produkData[produkIndex];
      newColors[produkIndex] =
        (prevColors[produkIndex] - 1 + produk.colors.length) %
        produk.colors.length;
      return newColors;
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
                <img
                  src={produk.colors[currentColors[index]]}
                  alt={produk.name}
                  className="produk-image"
                />
                <button
                  className="color-change-button left"
                  onClick={() => handlePrevColor(index)}
                >
                  <i data-feather="chevron-left" className="feather-icon"></i>
                </button>
                <button
                  className="color-change-button right"
                  onClick={() => handleNextColor(index)}
                >
                  <i data-feather="chevron-right" className="feather-icon"></i>
                </button>
              </div>
              <div className="produk-info">
                <h3>{produk.name}</h3>
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
