import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Tour from './pages/Tour/Tour';
import Gallery from './pages/Gallery/Gallery';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Booking from './pages/Booking/Booking';

function App() {
  return (
    <>

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Tour" element={<Tour/>}/>
      <Route exact path="/Gallery" element={<Gallery/>}/>
      <Route exact path="/Services" element={<Services/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="/Booking" element={<Booking/>}/>

    </Routes>
    </>
    
  );
}

export default App;
