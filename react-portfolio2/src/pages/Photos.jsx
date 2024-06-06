import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import theme_pattern from '../assets/theme_pattern.svg';

import './Photos.css';

const Photos = () => {
  return (
    <>
      <Navbar />
      <div className="photos-page-container">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default Photos
