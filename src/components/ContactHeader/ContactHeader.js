import React from 'react';
import './ContactHeader.css'; // Link the CSS for styles

function ContactHeader() {
  return (
    <div>
      {/* Header Section */}
      <div className="about-us-section">
        <div className="container">
          <h1 
            className="header-title" 
            style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
          >
            Contact Us
          </h1>
          <p className="header-description">
            Explore the wide range of services we offer to make your travel experience unforgettable.
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

export default ContactHeader;
