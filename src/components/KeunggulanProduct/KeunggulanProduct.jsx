// src/components/KeunggulanProduk.jsx
import React from "react";
import "./KeunggulanProduct.css";

const KeunggulanProduk = () => {
  const keunggulan = [
    {
      title: "Performa Optimal",
      description:
        "Motor listrik kami dirancang dengan mesin bertenaga yang memberikan akselerasi instan dan kecepatan responsif untuk pengalaman berkendara yang lebih menyenangkan.",
    },
    {
      title: "Desain Futuristik & Elegan",
      description:
        "Setiap model memiliki desain modern yang tidak hanya fungsional tetapi juga menarik perhatian, memadukan gaya dan inovasi dalam satu paket.",
    },
    {
      title: "Ramah Lingkungan",
      description:
        "Dengan emisi nol, motor listrik kami adalah pilihan cerdas untuk masa depan, membantu mengurangi polusi udara dan jejak karbon di kota.",
    },
    {
      title: "Efisiensi Biaya",
      description:
        "Hemat biaya operasional dan perawatan. Biaya pengisian daya listrik jauh lebih murah dibanding bahan bakar konvensional, dan perawatan motor listrik lebih sederhana.",
    },
  ];

  return (
    <section id="keunggulan" className="keunggulan-produk">
      <div className="container-content">
        <h2>Mengapa Pilih Motor Listrik Kami?</h2>
        <div className="keunggulan-grid">
          {keunggulan.map((item, index) => (
            <div key={index} className="keunggulan-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeunggulanProduk;
