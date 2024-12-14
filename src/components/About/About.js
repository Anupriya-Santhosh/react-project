import React, { useEffect } from 'react';
import 'animate.css';
import './About.css'; // Make sure to create and style the component in About.css
import about3 from '../../assets/images/about3.webp';
import img11 from '../../assets/images/img11.avif';
import img17 from '../../assets/images/img17.avif';
import about4 from '../../assets/images/about4.jfif';

function About() {
  // Function to animate number counting and progress bars
  const animateRating = (id, barId, start, end, duration) => {
    const obj = document.getElementById(id);
    const bar = document.getElementById(barId);
    let startTime = null;

    // Update the value and progress bar
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      obj.innerText = currentValue;
      bar.style.width = `${(currentValue / end) * 100}%`;
      bar.setAttribute('aria-valuenow', currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Use useEffect to initialize animation when component is mounted
  useEffect(() => {
    animateRating("experience-count", "experience-bar", 0, 15, 5000); // 15 years, 5 seconds
    animateRating("destinations-count", "destinations-bar", 0, 50, 5000); // 50 destinations, 5 seconds
  }, []);

  return (
    <section className="about-us py-5 animate__animated animate__fadeIn" id="About_us" style={{ backgroundColor: '#BDDDFC' }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          
          {/* About Us Images */}
          <div className="col-12 col-lg-6">
            <div className="row g-3">
              <div className="col-6 col-md-6 col-lg-6 text-start">
                <img className="img-fluid w-100 animate__animated animate__fadeInLeft zoom-effect" data-wow-delay="0.1s" src={about3} alt="Image 1" />
              </div>
              <div className="col-6 col-md-6 col-lg-6 text-start">
                <img className="img-fluid w-100 animate__animated animate__fadeInRight zoom-effect" data-wow-delay="0.3s" src={img11} alt="Image 2" />
              </div>
              <div className="col-6 col-md-6 col-lg-6 text-end">
                <img className="img-fluid w-100 animate__animated animate__fadeInUp zoom-effect" data-wow-delay="0.5s" src={img17} alt="Image 3" />
              </div>
              <div className="col-6 col-md-6 col-lg-6 text-end">
                <img className="img-fluid w-100 animate__animated animate__fadeInDown zoom-effect" data-wow-delay="0.7s" src={about4} alt="Image 4" />
              </div>
            </div>
          </div>

          {/* About Us Text */}
          <div className="col-12 col-lg-6">
            <h5 className="section-title ff-secondary text-start text-white fw-normal animate__animated animate__fadeInLeft" style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}>
              About Us_______
            </h5>
            <h1 className="mb-4 text-dark animate__animated animate__zoomIn">Welcome to Our Journey</h1>
            <p className="mb-4 text-white animate__animated animate__fadeIn">
            Welcome to Travel, your gateway to unforgettable adventures! We are a premier travel agency passionate about crafting unique and personalized travel experiences. Whether you dream of a luxury escape, an adventurous journey, or a budget-friendly getaway, our dedicated team is here to make your travel aspirations a reality.
            </p>
            <p className="mb-4 text-white animate__animated animate__fadeIn">
            At Travel, we believe that every destination tells a story, and we are committed to helping you write yours. With years of expertise, trusted local guides, and carefully curated itineraries, we ensure that every trip is as seamless and enjoyable as possible. Our mission is to create moments you'll cherish, from hidden gems to iconic landmarks.

            Let us take care of the details while you focus on making memories. Embark on your next adventure with Travel, where your journey begins.
            </p>

            {/* Statistics with Progress Bars */}
            <div className="row g-4 mb-4 animate__animated animate__fadeInUp">
              <div className="col-12 col-sm-6">
                <div className="d-flex flex-column align-items-start border-start border-5 border-dark px-3">
                  <div className="d-flex align-items-center mb-2">
                    <h1 id="experience-count" className="display-5 text-dark mb-0 me-3">0</h1>
                    <p className="mb-0 text-white">Years of Experience</p>
                  </div>
                  <div className="progress" style={{ width: '100%' }}>
                    <div id="experience-bar" className="progress-bar bg-dark" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="15"></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="d-flex flex-column align-items-start border-start border-5 border-dark px-3">
                  <div className="d-flex align-items-center mb-2">
                    <h1 id="destinations-count" className="display-5 text-dark mb-0 me-3">0</h1>
                    <p className="mb-0 text-white">Destinations Covered</p>
                  </div>
                  <div className="progress" style={{ width: '100%' }}>
                    <div id="destinations-bar" className="progress-bar bg-dark" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="50"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
