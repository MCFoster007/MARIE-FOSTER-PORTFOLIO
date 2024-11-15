// import {useState} from 'react';
import React from 'react';
import './src/components/Navbar.css';
import melogo from './src/assets/melogo.jpeg';
import App from './src/components/App.jsx';


const Navbar = () => {

  return (
      <nav>
     <img src={melogo} alt="cartoon me" />
     <ul>
      <li>About Me</li>
      <li>Portfolio</li>
      <li>Contact Me</li>
      <li>Resume</li>
     </ul>
      </nav>
   
  )
}

export default Navbar;
