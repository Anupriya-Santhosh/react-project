import React from 'react';
import './TourSection.css';
import img1 from '../../assets/images/img2.avif';
import img2 from '../../assets/images/img3.avif';
import img3 from '../../assets/images/img4.avif';
import img4 from '../../assets/images/img5.avif';
import img5 from '../../assets/images/img6.avif';
import img6 from '../../assets/images/img10.jpg';

function TourSection() {
  return (
    <div>
      <section className="tours py-5" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
          >
            Our Top Tours
          </h2>
          <div className="row g-4">
            {/* Tour 1 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                <img
                  src={img1}
                  className="card-img-top"
                  alt="Tour 1"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ fontWeight: 600, color: '#333' }}>
                    Amazing Thailand
                  </h5>
                  <p className="card-text" style={{ fontSize: '0.9rem', color: '#777' }}>
                    Experience the vibrant culture and beautiful landscapes of Thailand. Enjoy
                    guided tours, local cuisine, and unique adventures.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Tour 2 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                <img
                  src={img2}
                  className="card-img-top"
                  alt="Tour 2"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ fontWeight: 600, color: '#333' }}>
                    Paris City Tour
                  </h5>
                  <p className="card-text" style={{ fontSize: '0.9rem', color: '#777' }}>
                    Explore the enchanting city of Paris with our exclusive tour. Visit iconic
                    landmarks, enjoy fine dining, and immerse yourself in French culture.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Tour 3 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                <img
                  src={img3}
                  className="card-img-top"
                  alt="Tour 3"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ fontWeight: 600, color: '#333' }}>
                    Adventure in New Zealand
                  </h5>
                  <p className="card-text" style={{ fontSize: '0.9rem', color: '#777' }}>
                    Discover the natural wonders of New Zealand. From stunning fjords to vibrant
                    cities, this tour offers a mix of adventure and relaxation.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Tour 4 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                <img
                  src={img4}
                  className="card-img-top"
                  alt="Tour 4"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ fontWeight: 600, color: '#333' }}>
                    Exploring Japan
                  </h5>
                  <p className="card-text" style={{ fontSize: '0.9rem', color: '#777' }}>
                    Experience the unique blend of tradition and modernity in Japan. Enjoy
                    historical sites, vibrant cities, and serene landscapes.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Tour 5 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                <img
                  src={img5}
                  className="card-img-top"
                  alt="Tour 5"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ fontWeight: 600, color: '#333' }}>
                    Luxury Cruise
                  </h5>
                  <p className="card-text" style={{ fontSize: '0.9rem', color: '#777' }}>
                    Indulge in luxury with our cruise tour. Enjoy exquisite dining, world-class
                    amenities, and breathtaking ocean views sre so beautiful.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Tour 6 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                <img
                  src={img6}
                  className="card-img-top"
                  alt="Tour 6"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ fontWeight: 600, color: '#333' }}>
                    Safari Adventure
                  </h5>
                  <p className="card-text" style={{ fontSize: '0.9rem', color: '#777' }}>
                    Embark on a thrilling safari adventure. Experience the thrill of wildlife
                    sightings and explore the beauty of the African savannah.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TourSection;
