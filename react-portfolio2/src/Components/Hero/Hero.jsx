import React from 'react';
import './Hero.css';
import BW_profile from "../../assets/BW_profile.jpg";

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-image">
        <img src={BW_profile} />
      </div>
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
          Connect with me
        </div>
        <div className="hero-resume">My resume</div>

      </div>
    </div>
  )
}

export default Hero
