import React from 'react';
import './GallerySection.css';

// Importing images
import img1 from '../../assets/images/zach-miles-Y84-eo8drzk-unsplash.jpg';
import img2 from '../../assets/images/yuhan-du-oqUnN9z673Q-unsplash.jpg';
import img3 from '../../assets/images/yohann-mourre-hds60mCxbPg-unsplash.jpg';
import img4 from '../../assets/images/y-s-p6ekZCw7X1U-unsplash.jpg';
import img5 from '../../assets/images/wp8974082-4k-purple-flowers-wallpapers.jpg';
import img6 from '../../assets/images/william-bayreuther-C0KdBbibUYo-unsplash.jpg';
import img7 from '../../assets/images/vinayak-sharma-xFpB63IlwNo-unsplash.jpg';
import img8 from '../../assets/images/vita-vilcina-0G1r-Cg0zS8-unsplash.jpg';
import img9 from '../../assets/images/tim-trad-CLm3pWXrS9Q-unsplash.jpg';
import img10 from '../../assets/images/arthur-humeau-3xwdarHxHqI-unsplash.jpg';
import img11 from '../../assets/images/travel-hd-wruelfhuiyy7ewtw.webp';
import img12 from '../../assets/images/travel-hd-k5pwu3imba57139p hotel.webp';
import img13 from '../../assets/images/alex-vasey-F5HtPjpBb9k-unsplash.jpg';
import img14 from '../../assets/images/timo-stern-iUBgeNeyVy8-unsplash.jpg';
import img15 from '../../assets/images/pedro-lastra-c1OVi149Y2Y-unsplash.jpg';
import img16 from '../../assets/images/stevie-ekkelkamp-t7z3xjyRsQ4-unsplash.jpg';
import img17 from '../../assets/images/alexander-XSl6VEp7LFg-unsplash.jpg';
import img18 from '../../assets/images/agustin-diaz-gargiulo-7F65HDP0-E0-unsplash.jpg';
import img19 from '../../assets/images/anders-jilden-cYrMQA7a3Wc-unsplash.jpg';
import img20 from '../../assets/images/alexandre-chambon-aapSemzfsOk-unsplash.jpg'

function GallerySection() {
  return (
    <div className="album">
      <div className="responsive-container-block bg">
        {/* First Column */}
        <div className="responsive-container-block img-cont">
          <img className="img" src={img1} alt="Image 1" />
          <img className="img" src={img2} alt="Image 2" />
          <img className="img img-last" src={img3} alt="Image 3" />
          <img className="img" src={img9} alt="Image 9" />
          <img className="img" src={img10} alt="Image 10" />
          <img className="img" src={img19} alt="Image 19" />
          <img className="img" src={img20} alt="Image 20" />
        </div>
        {/* Second Column */}
        <div className="responsive-container-block img-cont">
          <img className="img img-big" src={img4} alt="Image 4" />
          <img className="img img-big img-last" src={img5} alt="Image 5" />
          <img className="img img-big" src={img11} alt="Image 11" />
          <img className="img img-big img-last" src={img12} alt="Image 12" />
          <img className="img img-big" src={img15} alt="Image 15" />
          <img className="img img-big img-last" src={img16} alt="Image 16" />
          <img className="img img-big img-last" src={img17} alt="Image 17" />
        </div>
        {/* Third Column */}
        <div className="responsive-container-block img-cont">
          <img className="img" src={img6} alt="Image 6" />
          <img className="img" src={img7} alt="Image 7" />
          <img className="img" src={img8} alt="Image 8" />
          <img className="img" src={img13} alt="Image 13" />
          <img className="img" src={img14} alt="Image 14" />
          <img className="img" src={img18} alt="Image 18" />
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
