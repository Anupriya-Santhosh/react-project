import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import AboutHeader from '../../components/AboutHeader/AboutHeader';
import OurStory from '../../components/OurStory/OurStory';
import OurTeam from '../../components/OurTeam/OurTeam';
import OurMission from '../../components/OurMission/OurMission';
import Footer from '../../components/Footer/Footer';

function About() {
  return (
    <div>
          <Navbar/>
          <AboutHeader/>
          <OurStory/>
          <OurTeam/>
          <OurMission/>
          <Footer/>
    </div>
  )
}

export default About