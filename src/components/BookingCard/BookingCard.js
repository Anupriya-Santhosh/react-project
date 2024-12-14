import React from 'react';
import './BookingCard.css';
import img1 from '../../assets/images/spencer-watson-jG1qamY6TGw-unsplash.jpg';
import img2 from '../../assets/images/steven-pahel-645g50Mxy8s-unsplash.jpg';
import img3 from '../../assets/images/spencer-watson-ioy3bN5Irew-unsplash.jpg';
import img4 from '../../assets/images/spencer-davis-0QcSnCM0aMc-unsplash.jpg';

function BookingCard() {
  return (
    <div>
      <section className="new-booking-section">
        <div className="container">
          <h2 
            className="booking-title" 
            style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
          >
            Book Your Dream Vacation
          </h2>
          <p className="booking-description">
            Choose from our carefully selected vacation packages and book your dream trip today! Get ready for an unforgettable adventure.
          </p>

          <div className="booking-options">
            {/* Booking Option 1 */}
            <div className="booking-option-card">
              <img 
                src={img1} 
                alt="Destination 1" 
                className="destination-image" 
              />
              <div className="booking-details">
                <h3 className="destination-title">Paris - The City of Lights</h3>
                <p className="destination-description">
                  Explore the beautiful city of Paris with a guided tour of famous landmarks, museums, and more.
                </p>
                <p className="price">$999</p>
                <a href="#" className="book-now-btn">Book Now</a>
              </div>
            </div>

            {/* Booking Option 2 */}
            <div className="booking-option-card">
              <img 
                src={img2} 
                alt="Destination 2" 
                className="destination-image" 
              />
              <div className="booking-details">
                <h3 className="destination-title">Maldives - Tropical Paradise</h3>
                <p className="destination-description">
                  Enjoy a luxurious stay in the Maldives with private beach resorts, crystal clear waters, and incredible experiences.
                </p>
                <p className="price">$1299</p>
                <a href="#" className="book-now-btn">Book Now</a>
              </div>
            </div>

            {/* Booking Option 3 */}
            <div className="booking-option-card">
              <img 
                src={img3}
                alt="Destination 3" 
                className="destination-image" 
              />
              <div className="booking-details">
                <h3 className="destination-title">Tokyo - The Urban Adventure</h3>
                <p className="destination-description">
                  Explore the vibrant city of Tokyo, with its mix of traditional temples and modern skyscrapers, delicious cuisine, and unique culture.
                </p>
                <p className="price">$899</p>
                <a href="#" className="book-now-btn">Book Now</a>
              </div>
            </div>

            {/* Booking Option 4 */}
            <div className="booking-option-card">
              <img 
                src={img4}
                alt="Destination 4" 
                className="destination-image" 
              />
              <div className="booking-details">
                <h3 className="destination-title">Dubai - The City of Wonders</h3>
                <p className="destination-description">
                  Discover the luxurious city of Dubai, where you can explore modern marvels, experience desert adventures, and shop in grand malls.
                </p>
                <p className="price">$1499</p>
                <a href="#" className="book-now-btn">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingCard;
