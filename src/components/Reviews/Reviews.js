// src/components/ReviewsPage.js

import React from 'react';
import './Reviews.css'; // Import a CSS file if needed for additional styles
import girl from '../../assets/images/girl.webp';
import man from '../../assets/images/man.jpg';
import girl2 from '../../assets/images/girl2.jpeg';

const ReviewsPage = () => {
  return (
    <section className="reviews-page py-5" style={{ backgroundColor: '#f0f4f8' }}>
      <div className="container">
        <h1 className="text-center mb-4 text-dark" style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}>
          Customer Reviews
        </h1>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="review-card p-4 bg-white rounded shadow-sm hover-effect">
              <div className="review-header d-flex align-items-center mb-3">
                <img
                  src={girl}
                  className="review-img rounded-circle me-3"
                  alt="Reviewer 1"
                />
                <h5 className="review-title text-dark">Sharaya Anil</h5>
              </div>
              <p className="review-text text-muted">
                "An amazing experience! The trip was well-organized and the guides were incredibly knowledgeable."
              </p>
              <div className="review-rating">
                <span className="star-rating">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star text-warning"></i>
                </span>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="review-card p-4 bg-white rounded shadow-sm hover-effect">
              <div className="review-header d-flex align-items-center mb-3">
                <img
                  src={man}
                  className="review-img rounded-circle me-3"
                  alt="Reviewer 2"
                />
                <h5 className="review-title text-dark">Sunil Kumar</h5>
              </div>
              <p className="review-text text-muted">
                "Fantastic service and beautiful destinations. Everything was perfect from start to finish. Will definitely book again!"
              </p>
              <div className="review-rating">
                <span className="star-rating">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-half text-warning"></i>
                  <i className="bi bi-star text-warning"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="review-card p-4 bg-white rounded shadow-sm hover-effect">
              <div className="review-header d-flex align-items-center mb-3">
                <img
                  src={girl2}
                  className="review-img rounded-circle me-3"
                  alt="Reviewer 3"
                />
                <h5 className="review-title text-dark">Alice Jhon</h5>
              </div>
              <p className="review-text text-muted">
                "A wonderful experience! The accommodations were top-notch and the itinerary was well-planned. Five stars!"
              </p>
              <div className="review-rating">
                <span className="star-rating">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
