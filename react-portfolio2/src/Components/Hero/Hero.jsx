import React from 'react';
import './Hero.css';
import BW_profile from "../../assets/BW_profile.jpg"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-image">
        <img src={BW_profile} />
      </div>
      <h1>Benton Westergaard, a fullstack developer based in Boulder, Colorado</h1>
      <p>some text</p>
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
