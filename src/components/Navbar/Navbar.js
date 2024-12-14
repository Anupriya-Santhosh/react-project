import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css';  // You can style the navbar here
import images from '../../assets/images/logo web.webp';

const Navbar = () => {
  return (

     <nav className="navbar navbar-expand-lg fixed-top navbar-custom"style={{ backgroundColor: '#384959' }}>
        <div className="container-fluid">
            <a className="navbar-brand"><img src={images} height="50px" width="50px" alt=""/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" > </span>
            </button>
            <div className="offcanvas offcanvas-end offcanvas-custom" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Explore</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
            <div className="navbar-nav  ">
              <NavLink to="/" className="nav-item nav-link"  style={({ isActive, isPending }) => {    return {
                color: isActive ? "black" : "white",
                fontWeight: isPending ? "bold" : "",
                };
                 }} >Home</NavLink>
                        <NavLink to="/About" className="nav-item nav-link  " style={({ isActive, isPending }) => {
                         return {
                          color: isActive ? "black" : "white",
                          fontWeight: isPending ? "bold" : "",
                            };
                             }}>About</NavLink>
                       <NavLink to="/Tour" className="nav-item nav-link  " style={({ isActive, isPending }) => {
                         return {
                          color: isActive ? "black" : "white",
                          fontWeight: isPending ? "bold" : "",
                            };
                             }}>Tour</NavLink>
                        
                        <NavLink to="/Gallery" className="nav-item nav-link  " style={({ isActive, isPending }) => {
                         return {
                          color: isActive ? "black" : "white",
                          fontWeight: isPending ? "bold" : "",
                            };
                             }}>Gallery</NavLink>
                        <NavLink to="/Services" className="nav-item nav-link  " style={({ isActive, isPending }) => {
                         return {
                          color: isActive ? "black" : "white",
                          fontWeight: isPending ? "bold" : "",
                            };
                             }}>Services</NavLink>
                        <NavLink to="/Contact" className="nav-item nav-link  " style={({ isActive, isPending }) => {
                         return {
                          color: isActive ? "black" : "white",
                          fontWeight: isPending ? "bold" : "",
                            };
                             }}>Contact</NavLink>
                        <NavLink to="/Login" className="nav-item nav-link  " style={({ isActive, isPending }) => {
                         return {
                          color: isActive ? "black" : "white",
                          fontWeight: isPending ? "bold" : "",
                            };
                             }}>Login</NavLink>
                        <NavLink to="/Booking" className="nav-item nav-link  " style={({ isActive, isPending }) => {
                         return {
                          color: isActive ? "black" : "white",
                          fontWeight: isPending ? "bold" : "",
                            };
                             }}>Booking</NavLink>
                        
                    </div>
                </div>
            </div>
        </div>
    </nav>
      
  );
};

export default Navbar;