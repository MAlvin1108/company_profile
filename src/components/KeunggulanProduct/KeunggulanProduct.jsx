// src/components/KeunggulanProduk.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Keunggulanproduct.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

// Data untuk gambar 360 derajat
const adora360Images = Array.from(
  { length: 42 },
  (_, i) => `/Adora-360/${i + 1}.png`
);

const tyrano360Images = Array.from(
  { length: 42 },
  (_, i) => `/Tyrano-360/${i + 1}.png`
);

const KeunggulanProduk = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [current360Images, setCurrent360Images] = useState([]);
  const [current360Index, setCurrent360Index] = useState(0);
  const imageContainerRef = useRef(null);

  const openModal = (productName) => {
    if (productName === "Adora") {
      setCurrent360Images(adora360Images);
    } else if (productName === "Tyrano") {
      setCurrent360Images(tyrano360Images);
    }
    setModalVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrent360Images([]);
    setCurrent360Index(0);
    document.body.style.overflow = "auto";
  };

  const handleMouseMove = (e) => {
    if (imageContainerRef.current) {
      const { width } = imageContainerRef.current.getBoundingClientRect();
      const newIndex = Math.floor(
        (e.clientX / width) * current360Images.length
      );
      setCurrent360Index(newIndex % current360Images.length);
    }
  };

  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="keunggulan"
      className={`keunggulan-produk ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container-content">
        <h2 className={isVisible ? "is-visible" : ""}>
          Mengapa Pilih Motor Listrik Kami?
        </h2>
        <div className="keunggulan-container">
          <div className="banner-column">
            <img
              src="/logo/logo_Adora.png"
              alt="Adora Banner"
              className="product-banner adora-banner"
              onClick={() => openModal("Adora")}
            />
            <img
              src="/logo/logo_Tyrano.png"
              alt="Tyrano Banner"
              className="product-banner tyrano-banner"
              onClick={() => openModal("Tyrano")}
            />
          </div>
          <div className="keunggulan-image-column">
            <img
              src="/keunggulan/keunggulan.jpeg"
              alt="Keunggulan Produk"
              className="keunggulan-image"
            />
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              <i data-feather="x" className="feather-icon"></i>
            </button>
            <div
              className="interactive-360-viewer"
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
            >
              <img
                src={current360Images[current360Index]}
                alt="360 View"
                className="viewer-image"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default KeunggulanProduk;
