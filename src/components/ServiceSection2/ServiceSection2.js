import React from 'react';
import './ServiceSection2.css'; // CSS file for custom styling

function ServiceSection2() {
  return (
    <div>
      {/* Services Section */}
      <section className="services py-5" style={{ backgroundColor: '#BDDDFC' }}>
        <div className="container">
          <h2
            className="text-center mb-4"
            style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
          >
            Here You Go
          </h2>
          <div className="row">
            {/* Service 1 */}
            <div className="col-md-3 mb-4">
              <div className="box">
                <div className="content">
                  <h2>01</h2>
                  <h3>Travel Booking</h3>
                  <p>
                    Book your flights, hotels, and tours in one place. We offer a wide range of travel
                    options to fit your preferences and budget.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-md-3 mb-4">
              <div className="box">
                <div className="content">
                  <h2>02</h2>
                  <h3>Personalized Itineraries</h3>
                  <p>
                    Let us design your perfect travel itinerary. From local adventures to international
                    trips, we tailor every journey to your needs.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-md-3 mb-4">
              <div className="box">
                <div className="content">
                  <h2>03</h2>
                  <h3>Local Travel Guides</h3>
                  <p>
                    Explore new destinations with expert local guides. Our guides provide insider
                    knowledge to help you discover hidden gems.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="col-md-3 mb-4">
              <div className="box">
                <div className="content">
                  <h2>04</h2>
                  <h3>24/7 Customer Support</h3>
                  <p>
                    Our dedicated support team is available around the clock to assist you with any
                    inquiries or concerns during your trip.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSection2;
