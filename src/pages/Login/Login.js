import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import LoginHeader from '../../components/LoginHeader/LoginHeader';
import LoginPage from '../../components/LoginPage/LoginPage';
import Footer from '../../components/Footer/Footer';


function Login() {
  return (
    <div>
       <Navbar/> 
       <LoginHeader/>
      <LoginPage/>
       <Footer/>
    </div>
  )
}

export default Login;