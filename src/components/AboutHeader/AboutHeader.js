import React from 'react';
import './AboutHeader.css'; // Assuming you have a CSS file for custom styles

function AboutHeader() {
  return (
    <div className="about-us-section">
      <div className="container">
        <h1
          className="header-title"
          style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
        >
          About Us
        </h1>
        <p className="header-description">
          Welcome to our website! We are dedicated to providing the best services to our
          customers. Our team is passionate about delivering high-quality experiences and
          making sure you find exactly what you're looking for.
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

export default AboutHeader;
