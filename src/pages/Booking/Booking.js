import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import BookingHeader from '../../components/BookingHeader/BookingHeader';
import BookingCard from '../../components/BookingCard/BookingCard';
import BookingForm from '../../components/BookingForm/BookingForm';
import Footer from '../../components/Footer/Footer';



function Booking() {
  return (
    <div>
        <Navbar/>
        <BookingHeader/>
        <BookingCard/>
        <BookingForm/>
        <Footer/>

    </div>
  )
}

export default Booking