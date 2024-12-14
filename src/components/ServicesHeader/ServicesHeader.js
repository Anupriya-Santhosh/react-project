import React from 'react';
import './ServicesHeader.css'; // Include a CSS file for custom styles if necessary.

function ServicesHeader() {
  return (
    <div>
      {/* Services Header Section */}
      <div className="about-us-section">
        <div className="container">
          <h1
            className="header-title"
            style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
          >
            Our Services
          </h1>
          <p className="header-description">
            Explore the wide range of services we offer to make your travel experience
            unforgettable.
          </p>
        </div>

        {/* Extra Floating Shapes */}
        <div className="extra-shape extra-shape1"></div>
        <div className="extra-shape extra-shape2"></div>
        <div className="extra-shape extra-shape3"></div>
        <div className="extra-shape extra-shape4"></div>
      </div>
    </div>
  );
}

export default ServicesHeader;
