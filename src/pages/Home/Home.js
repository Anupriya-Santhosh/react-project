import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import About from '../../components/About/About';
import Gallery from '../../components/Gallery/Gallery';
import Reviews from '../../components/Reviews/Reviews';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div>
       <Navbar/> 
       <Slider/>
       <About/>
       <Gallery />
       <Reviews/>
       <Footer/>
    </div>
  )
}

export default Home