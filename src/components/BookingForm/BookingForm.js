import React from 'react';
import './BookingForm.css';

function BookingForm() {
  return (
    <div>
      {/* Booking Form Section */}
      <div className="container mt-5 pt-5">
        <h2 
          className="text-center mb-4" 
          style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
        >
          Book Your Trip
        </h2>
        <div className="booking-form-wrapper p-4 rounded shadow">
          <form action="book_trip.php" method="POST"> {/* Specify the action here */}
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label text-white">Full Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="fullName" 
                name="full_name" 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label text-white">Phone Number (10 digits)</label>
              <input 
                type="tel" 
                className="form-control" 
                id="phone" 
                name="phone" 
                pattern="\d{10}" 
                title="Please enter a valid 10-digit phone number" 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="destination" className="form-label text-white">Destination</label>
              <select 
                className="form-select" 
                id="destination" 
                name="destination" 
                required
              >
                <option value="" disabled selected>
                  Select your destination
                </option>
                <option value="London">London</option>
                <option value="Kerala">Kerala</option>
                <option value="Europe">Europe</option>
                <option value="Paris">Paris</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label text-white">Travel Date</label>
              <input 
                type="date" 
                className="form-control" 
                id="date" 
                name="travel_date" 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="guests" className="form-label text-white">Number of Guests</label>
              <input 
                type="number" 
                className="form-control" 
                id="guests" 
                name="guests" 
                min="1" 
                required 
              />
            </div>
            <button type="submit" className="btn btn-dark">Confirm Booking</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
