// src/components/Produk.jsx
import React from "react";
import "./Produk.css";

const produkData = [
  {
    name: "Model Adora",
    image: "./public/Adora/Adora.png",
    price: "Rp 35.000.000",
    description:
      "Model Alpha adalah pilihan sempurna untuk penggunaan sehari-hari di perkotaan. Desainnya ramping dan ringan, memudahkan manuver di jalanan padat. Baterai tahan lama dan pengisian cepat menjamin mobilitas tanpa batas.",
  },
  {
    name: "Model Tyrano",
    image: "./public/tyrano/tyrano.png",
    price: "Rp 45.000.000",
    description:
      "Model Beta adalah motor listrik bertenaga tinggi untuk mereka yang mencari performa maksimal. Dengan akselerasi luar biasa dan jarak tempuh lebih jauh, motor ini siap menemani petualangan di luar kota.",
  },
];

const Produk = () => {
  return (
    <section id="products" className="produk-section">
      <div className="container-content">
        <h2>Motor Listrik Unggulan</h2>
        <div className="produk-grid">
          {produkData.map((produk, index) => (
            <div key={index} className="produk-card">
              <img src={produk.image} alt={produk.name} />
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
