import React from 'react';
import './PhotoStory.css'; // Include this CSS file for custom styles
import img1 from '../../assets/images/travel-hd-0ux43iskjc5s2x6w.webp';
import img2 from '../../assets/images/travel-hd-2fsg31b3wqteinpa.webp';
import img3 from '../../assets/images/travel-hd-jr86mcmkf7szpa3v.webp';

function PhotoStory() {
  return (
    <div>
      {/* Photo Stories Section */}
      <section className="photo-stories-section">
        <div className="container">
          <h2
            className="stories-title"
            style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
          >
            Photo Stories
          </h2>
          <p className="stories-description">
            Every picture tells a story. Explore our curated photo stories and get inspired by amazing travel experiences.
          </p>

          <div className="stories-container">
            {/* Story 1 */}
            <div className="story-card">
              <div
                className="story-image"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div className="story-content">
                <h3 className="story-title">Sunset in Bali</h3>
                <p className="story-info">
                  Experience the breathtaking beauty of a Bali sunset, where the sky transforms into a canvas of vivid colors.
                </p>
                <a href="#" className="read-story-btn">
                  Read More
                </a>
              </div>
            </div>

            {/* Story 2 */}
            <div className="story-card">
              <div
                className="story-image"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
              <div className="story-content">
                <h3 className="story-title">Mountain Adventure</h3>
                <p className="story-info">
                  Journey to the majestic peaks and embrace the thrill of mountain adventures, filled with stunning vistas.
                </p>
                <a href="#" className="read-story-btn">
                  Read More
                </a>
              </div>
            </div>

            {/* Story 3 */}
            <div className="story-card">
              <div
                className="story-image"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
              <div className="story-content">
                <h3 className="story-title">Cultural Wonders</h3>
                <p className="story-info">
                  Discover the rich cultural heritage of ancient cities, where history and tradition come alive.
                </p>
                <a href="#" className="read-story-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PhotoStory;
