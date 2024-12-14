import React from 'react';
import './TourHeader.css'; // Assuming you have a CSS file for custom styles

function TourHeader() {
  return (
    <div className="about-us-section">
      <div className="container">
        <h1
          className="header-title"
          style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
        >
          Explore Our Tours
        </h1>
        <p className="header-description">
        Journey with us to some of the most captivating destinations around the globe. Our tours are designed to inspire and offer unforgettable memories.
        </p>
      </div>

      {/* Extra Floating Shapes */}
      <div className="extra-shape extra-shape1"></div>
      <div className="extra-shape extra-shape2"></div>
      <div className="extra-shape extra-shape3"></div>
      <div className="extra-shape extra-shape4"></div>
    </div>
  );
}

export default TourHeader;
