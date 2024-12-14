import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import GalleryHeader from '../../components/GalleryHeader/GalleryHeader';
import GallerySection from '../../components/GallerySection/GallerySection';
import PhotoStory from '../../components/PhotoStory/PhotoStory';
import Footer from '../../components/Footer/Footer';

function Gallery() {
  return (
    <div>
         <Navbar/>
         <GalleryHeader/>
         <GallerySection/>
         <PhotoStory/>
         <Footer/> 

    </div>
  )
}

export default Gallery