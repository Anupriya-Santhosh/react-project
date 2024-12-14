import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import ContactHeader from '../../components/ContactHeader/ContactHeader';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactFaq from '../../components/ContactFaq/ContactFaq';
import Footer from '../../components/Footer/Footer';

function Contact() {
  return (
    <div>
        <Navbar/>
        <ContactHeader/>
        <ContactForm/>
        <ContactFaq/>
        <Footer/>
    </div>
  )
}

export default Contact