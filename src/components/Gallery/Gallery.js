import React from 'react';
import './Gallery.css';
import img6 from '../../assets/images/img6.avif';
import img5 from '../../assets/images/img5.avif';
import img4 from '../../assets/images/img4.avif';
import img3 from '../../assets/images/img3.avif';
import img2 from '../../assets/images/img2.avif';
import img1 from '../../assets/images/img1.avif';

function Gallery() {
  return (
    <div>
      <section className="gallery py-5" style={{ backgroundColor: '#BDDDFC' }}>
        <div className="container">
          <h2
            className="text-center mb-4 text-dark"
            style={{
              fontStyle: 'italic',
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Best Offers
          </h2>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div
                className="gallery-item"
                style={{ backgroundImage: `url(${img6})` }}
              >
                <div className="overlay">
                  <h4>Turkey</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div
                className="gallery-item"
                style={{ backgroundImage: `url(${img5})` }}
              >
                <div className="overlay">
                  <h4>Kerala</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div
                className="gallery-item"
                style={{ backgroundImage: `url(${img4})` }}
              >
                <div className="overlay">
                  <h4>Panjab</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div
                className="gallery-item"
                style={{ backgroundImage: `url(${img3})` }}
              >
                <div className="overlay">
                  <h4>Africa</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div
                className="gallery-item"
                style={{ backgroundImage: `url(${img2})` }}
              >
                <div className="overlay">
                  <h4>Bhutan</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div
                className="gallery-item"
                style={{ backgroundImage: `url(${img1})` }}
              >
                <div className="overlay">
                  <h4>Kashmir</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="gallery.php" className="btn btn-dark btn-lg">
              View More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
