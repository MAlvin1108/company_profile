// src/components/Reviews.jsx
import React from "react";
import "./Review.css";

const dummyReviews = [
  {
    name: "Rio S.",
    review:
      "Motor listrik dari Indolocal sangat nyaman dan tangguh untuk harian. Jarak tempuhnya juga sangat memuaskan, tidak khawatir kehabisan daya. Desainnya modern dan stylish, bikin bangga saat dipakai!",
    rating: 5,
  },
  {
    name: "Anita L.",
    review:
      "Pelayanan Indolocal sangat profesional. Motornya sangat mudah dikendarai dan perawatannya jauh lebih simple. Sangat cocok untuk saya yang sering bepergian di dalam kota. Rekomendasi!",
    rating: 4,
  },
  {
    name: "Budi T.",
    review:
      "Saya awalnya ragu, tapi setelah mencoba Model Beta, semua keraguan hilang. Performanya luar biasa, responsif, dan stabil. Motor listrik ini adalah investasi terbaik untuk mobilitas masa depan.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container-content">
        <h2>Apa Kata Mereka?</h2>
        <div className="reviews-grid">
          {dummyReviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-rating">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="review-text">"{review.review}"</p>
              <p className="review-author">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
