import React from 'react';
import './OurStory.css';
import img1 from '../../assets/images/jr-ross-Dl0-H4BaynI-unsplash.jpg';

function OurStory() {
  return (
    <section className="our-story py-5" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column with Image */}
          <div className="col-md-6">
            <div className="story-image">
              <img
                src={img1}
                alt="Our Story"
                className="img-fluid rounded-4 shadow-lg"
                style={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            </div>
          </div>

          {/* Right Column with Text */}
          <div className="col-md-6">
            <h2
              className="text-center mb-4"
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: '#2b3e50',
                fontSize: '3rem',
                letterSpacing: '2px',
                position: 'relative',
              }}
            >
              Our Story
              <span
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: '#f44336',
                  width: '60%',
                  margin: '0 auto',
                }}
              ></span>
            </h2>
            <p
              className="text-justify"
              style={{
                fontSize: '1.1rem',
                color: '#555',
                lineHeight: '1.8',
                textAlign: 'justify',
              }}
            >
              From humble beginnings to becoming one of the leading travel destinations, our
              journey has been filled with passion, dedication, and a love for exploring the
              world. We started as a small team with big dreams of connecting travelers with the
              most beautiful and unexplored corners of the globe. Every destination we offer is
              carefully selected to provide not just a trip, but a unique experience.
            </p>
            <p
              className="text-justify"
              style={{
                fontSize: '1.1rem',
                color: '#555',
                lineHeight: '1.8',
                textAlign: 'justify',
              }}
            >
              Over the years, we've grown, but our core values remain the same: authentic
              experiences, sustainable travel, and creating unforgettable memories for each
              traveler. Join us as we continue to discover new places, share stories, and help
              you make your travel dreams come true.
            </p>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="row py-5">
          <div className="col-12 text-center">
            <h3
              className="mb-4"
              style={{
                fontStyle: 'italic',
                fontFamily: "'Great Vibes', cursive",
                color: '#2b3e50',
                fontSize: '2rem',
              }}
            >
              Our Milestones
            </h3>
          </div>
          <div className="col-12">
            <ul className="timeline">
              <li className="timeline-item">
                <div className="timeline-icon">🏆</div>
                <div className="timeline-content">
                  <h5>2015 - The Beginning</h5>
                  <p>
                    Our journey began with a small group of passionate travelers who dreamed of
                    offering exceptional travel experiences.
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-icon">🌍</div>
                <div className="timeline-content">
                  <h5>2018 - Expanding Horizons</h5>
                  <p>
                    We started adding destinations across the globe, focusing on local cultures,
                    hidden gems, and sustainable tourism.
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-icon">✈️</div>
                <div className="timeline-content">
                  <h5>2022 - A Global Presence</h5>
                  <p>
                    We now have a global community of travelers who trust us to plan their
                    adventures, making us one of the most trusted travel brands.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
