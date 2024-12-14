import React from 'react';
import './TourOffer.css'; // Assuming you'll create a CSS file for styling
import offer1 from '../../assets/images/eric-marty-IZunjrb3soo-unsplash.jpg';
import offer2 from '../../assets/images/denys-kostyuchenko-FQjUaIMQF3Q-unsplash.jpg';
import offer3 from '../../assets/images/graphic-node-qOTyvyjVyoY-unsplash.jpg';

function TourOffer() {
  return (
    <div>
      <div className="special-offers-section">
        <div className="special-offers-overlay"></div>
        <div className="container">
          <h2 className="special-offers-title" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Special Offers
          </h2>
          <p className="special-offers-description">
            Explore our exclusive deals and discounts. Don’t miss out on these limited-time offers to your favorite destinations!
          </p>
          <div className="offers-container">
            {/* Offer 1 */}
            <div className="offer-card">
              <div className="offer-image-wrapper">
                <img src={offer1} alt="Offer 1" className="offer-image" />
                <div className="offer-badge">20% Off</div>
              </div>
              <div className="offer-details">
                <h4>Romantic Getaway</h4>
                <p>
                  Enjoy a 20% discount on a romantic weekend escape to Paris. Offer valid till 30th
                  November 2024.
                </p>
                <a href="#" className="btn btn-dark">
                  Book Now
                </a>
              </div>
            </div>
            {/* Offer 2 */}
            <div className="offer-card">
              <div className="offer-image-wrapper">
                <img src={offer2} alt="Offer 2" className="offer-image" />
                <div className="offer-badge">15% Off</div>
              </div>
              <div className="offer-details">
                <h4>Adventure in the Alps</h4>
                <p>Get 15% off on a thrilling adventure in the Swiss Alps. Limited spots available!</p>
                <a href="#" className="btn btn-dark">
                  Learn More
                </a>
              </div>
            </div>
            {/* Offer 3 */}
            <div className="offer-card">
              <div className="offer-image-wrapper">
                <img src={offer3} alt="Offer 3" className="offer-image" />
                <div className="offer-badge">25% Off</div>
              </div>
              <div className="offer-details">
                <h4>Family Vacation Package</h4>
                <p>
                  Special family package to Hawaii with up to 25% discount. Perfect for the summer
                  holidays!
                </p>
                <a href="#" className="btn btn-dark">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourOffer;
