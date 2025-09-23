// src/components/Review/Review.jsx
import React from "react";
import "./Review.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

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

const customerImages = [
  "/customer/cust1.jpeg",
  "/customer/cust2.jpeg",
  "/customer/cust3.jpeg",
  "/customer/cust4.jpeg",
  "/customer/cust5.jpeg",
  "/customer/cust6.jpeg",
  // Tambahkan path gambar lain jika ada
];

const Review = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="reviews" className="reviews-section">
      <div
        ref={ref}
        className={`container-content ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className={isVisible ? "is-visible" : ""}>Apa Kata Mereka?</h2>

        {/* Kontainer Slider Gambar Customer */}
        <div className="customer-slider-container">
          <div className="customer-slider">
            {customerImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Customer ${index + 1}`}
                className="customer-image"
              />
            ))}
            {/* Menggandakan gambar untuk efek looping mulus */}
            {customerImages.map((image, index) => (
              <img
                key={index + customerImages.length}
                src={image}
                alt={`Customer ${index + 1}`}
                className="customer-image"
              />
            ))}
          </div>
        </div>

        <div className={`reviews-grid ${isVisible ? "is-visible" : ""}`}>
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

export default Review;
