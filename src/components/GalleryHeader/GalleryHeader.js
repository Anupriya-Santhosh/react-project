import React from 'react';
import './GalleryHeader.css'; // Ensure to create a CSS file for styling if necessary.

function GalleryHeader() {
  return (
    <div>
      {/* Gallery Header Section */}
      <div className="about-us-section">
        <div className="container">
          <h1
            className="header-title"
            style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
          >
            Our Gallery
          </h1>
          <p className="header-description">
            Discover a collection of beautiful images from our travels. Explore the moments that
            capture the essence of adventure and discovery.
          </p>
        </div>

        {/* Decorative Shapes */}
        <div className="extra-shape extra-shape1"></div>
        <div className="extra-shape extra-shape2"></div>
        <div className="extra-shape extra-shape3"></div>
        <div className="extra-shape extra-shape4"></div>
      </div>
    </div>
  );
}

export default GalleryHeader;
