import React from "react";
import './OurMission.css';
import img1 from '../../assets/images/carl-newton-AWJpalN_0yE-unsplash.jpg';
import img2 from '../../assets/images/clarisse-meyer-d6pLNFVZt_4-unsplash.jpg';
import img3 from '../../assets/images/christopher-kuzman-2LhCDvS_7xs-unsplash.jpg';

const OurMission = () => {
    return (
        <section className="our-mission-section py-5" style={{ backgroundColor: '#f0f4f8' }}>
            <div className="container my-3 py-5 text-center">
                <h1 style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}>Our Mission</h1>
                <p className="mb-5">
                    Our mission is to inspire travel by connecting people to unique experiences and creating unforgettable journeys that last a lifetime. We are dedicated to providing high-quality services that allow our customers to explore, enjoy, and discover the world with comfort and ease.
                </p>

                {/* Image Slider (Carousel) */}
                <div id="missionCarousel" className="carousel slide" data-bs-ride="carousel">
                    {/* Indicators */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#missionCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#missionCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#missionCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    {/* Carousel Inner */}
                    <div className="carousel-inner">
                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100 img-fluid rounded shadow" alt="Beautiful Landscape" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="bg-opacity-50 px-3 py-1 rounded">Exploring New Horizons</h5>
                                <p className="bg-opacity-50 px-3 py-1 rounded">Discover the beauty of nature with our exclusive tours.</p>
                            </div>
                        </div>
                        {/* Slide 2 */}
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100 img-fluid rounded shadow" alt="City Exploration" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="bg-opacity-50 px-3 py-1 rounded">City Exploration</h5>
                                <p className="bg-opacity-50 px-3 py-1 rounded">Experience the thrill of urban adventures in vibrant cities.</p>
                            </div>
                        </div>
                        {/* Slide 3 */}
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100 img-fluid rounded shadow" alt="Cultural Journey" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="bg-opacity-50 px-3 py-1 rounded">Cultural Journeys</h5>
                                <p className="bg-opacity-50 px-3 py-1 rounded">Immerse yourself in diverse cultures around the world.</p>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#missionCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#missionCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurMission;
