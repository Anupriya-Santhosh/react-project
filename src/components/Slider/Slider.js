import React, { useState, useEffect } from 'react';
import './Slider.css'; 
import images from '../../assets/images/London.jpg';
import image from '../../assets/images/Kerala.jpg';
import img from '../../assets/images/Europ.jpg';
import imgs from '../../assets/images/img33.jfif';

function Slider() {
  const slides = [
    {
      image: images,
      title: "EXPLORE THE WORLD WITH US",
      type: "LONDON",
      description: "Traveling can be a life-changing experience that can help you learn new things, meet new people, and develop new skills",
    },
    {
      image: image,
      title: "EXPLORE THE WORLD WITH US",
      type: "KERALA",
      description: "Traveling can be a life-changing experience that can help you learn new things, meet new people, and develop new skills",
    },
    {
      image: img,
      title: "EXPLORE THE WORLD WITH US",
      type: "EUROP",
      description: "Traveling can be a life-changing experience that can help you learn new things, meet new people, and develop new skills",
    },
    {
      image: imgs,
      title: "EXPLORE THE WORLD WITH US",
      type: "PARIS",
      description: "Traveling can be a life-changing experience that can help you learn new things, meet new people, and develop new skills",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the slide
  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  // Next and Previous Slide Functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider">
      <div className="list">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="item"
            style={{ opacity: index === currentIndex ? '1' : '0' }}
          >
            <img src={slide.image} alt="" />
            <div className="content">
              <div className="title">{slide.title}</div>
              <div className="type">{slide.type}</div>
              <div className="description">{slide.description}</div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="item"
            style={{ opacity: index === currentIndex ? '1' : '0.5' }}
            onClick={() => showSlide(index)} // Allow clicking thumbnail to change slide
          >
            <img src={slide.image} alt="" />
          </div>
        ))}
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={prevSlide}> prev </button>
        <button className="next" onClick={nextSlide}> next </button>
      </div>
    </div>
  );
}

export default Slider;
