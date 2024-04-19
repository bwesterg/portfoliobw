import React from 'react';
import './Hero.css';
import BW_profile from "../../assets/BW_profile.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <div className="image-and-name">
        <div className="hero-image">
          <img src={BW_profile} />
        </div>
        <div className="namebox">
          <h1>
            <span>
              Benton Westergaard<br /> 
            </span>
          </h1>
          <p>
            Full Stack Developer in Boulder, Colorado
          </p>
          <div className="hero-action">
            <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              Connect with me
            </AnchorLink>
            </div>
            <div className="hero-resume">My resume</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
