import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer text-white py-4" style={{ backgroundColor: '#384959' }}>
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <h5>About Us</h5>
              <p>
                We are a leading travel agency dedicated to providing exceptional travel experiences. 
                From luxury getaways to budget-friendly trips, we ensure every journey is memorable.
              </p>
            </div>

            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="travel_home.html" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">About Us</a></li>
                <li><a href="#" className="text-white">Tours</a></li>
                <li><a href="#" className="text-white">Reviews</a></li>
                <li><a href="#" className="text-white">Services</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5>Contact Us</h5>
              <p>Email: <a href="mailto:contact@travelwebsite.com" className="text-white">contact@travelwebsite.com</a></p>
              <p>Phone: <a href="tel:+919406995043" className="text-white">+91 9406995043</a></p>
              <p>Address: 123 Travel Street, Cityville</p>
            </div>

            <div className="col-md-3 d-flex flex-column">
              <h5>Newsletter Signup</h5>
              <form action="#" method="post" className="mb-3">
                <div className="mb-2">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter your email" 
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-dark">Subscribe</button>
              </form>
              <div className="social-links">
                <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

          </div>

          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <h5>Latest News</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Travel Blog: Top 10 Destinations for 2024</a></li>
                <li><a href="#" className="text-white">New Tour Packages Announced</a></li>
                <li><a href="#" className="text-white">Special Discounts on Summer Trips</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-4">
            <p>&copy; 2024 Travel Website. All rights reserved.</p>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
