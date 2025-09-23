// src/components/KeunggulanProduk.jsx
import React from "react";
import "./KeunggulanProduct.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

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

  const [h2Ref, isH2Visible] = useIntersectionObserver({ threshold: 0.5 });
  const [gridRef, isGridVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="keunggulan" className="keunggulan-produk">
      <div className="container-content">
        <h2 ref={h2Ref} className={isH2Visible ? "is-visible" : ""}>
          Mengapa Pilih Motor Listrik Kami?
        </h2>
        <div
          ref={gridRef}
          className={`keunggulan-grid ${isGridVisible ? "is-visible" : ""}`}
        >
          <div className="section-3D">
            <div className="adora-3D">
              <ol className="picture-360"></ol>
            </div>
            <div className="tyrano-3D">
              <ol className="picture-360"></ol>
            </div>
            <div className="keunggulan-grid"></div>
          </div>
          {keunggulan.map((item, index) => (
            <div
              key={index}
              className={`keunggulan-card ${isGridVisible ? "is-visible" : ""}`}
            >
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
