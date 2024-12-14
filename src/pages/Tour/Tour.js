import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import TourHeader from '../../components/TourHeader/TourHeader';
import TourSection from '../../components/TourSection/TourSection';
import TourOffer from '../../components/TourOffer/TourOffer';
import Footer from '../../components/Footer/Footer';

function Tour() {
  return (
    <div>
         <Navbar/>
         <TourHeader/>
         <TourSection/> 
         <TourOffer/>
         <Footer/>
    </div>
  )
}

export default Tour