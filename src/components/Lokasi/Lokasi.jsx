// src/components/Lokasi.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Lokasi.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Lokasi = () => {
  const position = [-7.2462083, 112.7520888]; // Koordinat perusahaan
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="contact-us" className="lokasi-section">
      <div className="container-content">
        <h2 className={isVisible ? "is-visible" : ""}>Temukan Kami</h2>
        <p className={isVisible ? "is-visible" : ""}>
          Jl. Undaan Wetan No. 88, Kelurahan Kapasari, Kecamatan Genteng, Kota
          Surabaya
        </p>
        <div
          ref={ref}
          className={`container-map ${isVisible ? "is-visible" : ""}`}
        >
          <MapContainer center={position} zoom={13} className="map-container">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Kantor Pusat Indolocal <br /> Surabaya, Jawa Timur
              </Popup>
            </Marker>
          </MapContainer>
          <img src="./img/gedung.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Lokasi;
