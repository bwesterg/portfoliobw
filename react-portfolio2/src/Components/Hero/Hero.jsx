import React from 'react';
import './Hero.css';
import BW_profile from "../../assets/BW_profile.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import BW_Resume from "../../assets/Benton_Westergaard_Resume_2024.pdf";

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = BW_Resume;
    const filename = BW_Resume.split('/').pop();
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <div className="hero-resume" onClick={handleDownload}>My resume</div>

          </div>
        </div>
      </div>
    </div>
  )
}





export default Hero;
