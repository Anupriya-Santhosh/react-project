import React from 'react';
import './TravelGuides.css'; // Ensure to link the CSS file for styles

function TravelGuides() {
  return (
    <div>
      {/* Travel Tips & Guides Section */}
      <section className="travel-tips-section">
        <div className="container">
          <h2 
            className="tips-title" 
            style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
          >
            Travel Tips & Guides
          </h2>
          <p className="tips-description">
            Get the best travel advice and tips from our experts. From packing lists to destination insights, we’ve got you covered!
          </p>

          <div className="tips-container">
            {/* Tip 1 */}
            <div className="tip-card">
              <div className="tip-icon-wrapper">
                <i className="fas fa-suitcase-rolling tip-icon"></i>
              </div>
              <div className="tip-content">
                <h3 className="tip-title">Packing Essentials</h3>
                <p className="tip-info">
                  Learn how to pack efficiently for any type of trip, whether it’s a short getaway or a long adventure.
                </p>
                <a href="#" className="read-more-btn">Read More</a>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="tip-card">
              <div className="tip-icon-wrapper">
                <i className="fas fa-shield-alt tip-icon"></i>
              </div>
              <div className="tip-content">
                <h3 className="tip-title">Travel Safety</h3>
                <p className="tip-info">
                  Discover essential safety tips for traveling abroad, from health precautions to securing your belongings.
                </p>
                <a href="#" className="read-more-btn">Read More</a>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="tip-card">
              <div className="tip-icon-wrapper">
                <i className="fas fa-language tip-icon"></i>
              </div>
              <div className="tip-content">
                <h3 className="tip-title">Cultural Etiquette</h3>
                <p className="tip-info">
                  Get to know the local customs and cultural dos and don'ts to ensure a respectful and enjoyable trip.
                </p>
                <a href="#" className="read-more-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TravelGuides;
