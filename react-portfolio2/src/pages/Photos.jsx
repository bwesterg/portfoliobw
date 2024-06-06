import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import theme_pattern from '../assets/theme_pattern.svg';

import './Photos.css';
import images from './api-mock.json';

const Photos = () => {
  const [imageList, setImageList] = useState(images.resources);
  return (
    <>
      <Navbar />
      <div className="photos-page-container">
        <div className="image-grid">
          {imageList.map((image, index)=><img key={index} src={image.url} alt={image.public_id}/>)}
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default Photos
