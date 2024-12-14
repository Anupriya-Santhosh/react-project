import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import ServicesHeader from '../../components/ServicesHeader/ServicesHeader';
import ServicesSection1 from '../../components/ServicesSection1/ServicesSection1';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import TravelGuides from '../../components/TravelGuides/TravelGuides';
import Footer from '../../components/Footer/Footer';

function Services() {
  return (
    <div>
        <Navbar/> 
        <ServicesHeader/>
        <ServicesSection1/>
        <ServiceSection2/>
        <TravelGuides/>
        <Footer/>

    </div>
  )
}

export default Services