import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ServicesSection1.css'; // Include a CSS file for styling.

function ServicesSection1() {
  return (
    <div>
      {/* Our Services Section */}
      <section className="our-services-section">
        <div className="container">
          <h2
            className="services-title"
            style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
          >
            Our Services
          </h2>
          <p className="services-description">
            Discover our wide range of travel services designed to provide you with an
            unforgettable journey. Choose from the best!
          </p>

          <div className="services-container">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon-wrapper">
                <i className="fas fa-plane service-icon"></i>
              </div>
              <h3 className="service-title">Flight Booking</h3>
              <p className="service-description">
                Hassle-free flight booking with the best deals to any destination worldwide.
              </p>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon-wrapper">
                <i className="fas fa-hotel service-icon"></i>
              </div>
              <h3 className="service-title">Hotel Reservation</h3>
              <p className="service-description">
                Find and book top-rated hotels for a comfortable and luxurious stay.
              </p>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-icon-wrapper">
                <i className="fas fa-map-marked-alt service-icon"></i>
              </div>
              <h3 className="service-title">Tour Packages</h3>
              <p className="service-description">
                Explore our curated tour packages that cover the best attractions.
              </p>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon-wrapper">
                <i className="fas fa-car service-icon"></i>
              </div>
              <h3 className="service-title">Car Rentals</h3>
              <p className="service-description">
                Convenient car rentals for your travel needs, available anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesSection1;
