import React, { useEffect } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import BW_profile from "../../assets/BW_profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faJsSquare, faNpm, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import node from '../../assets/node.svg';
import npm from '../../assets/npm.svg';

const About = () => {

  // What Javascript statement in place of "?" will make the result always be 
  // between 6 and 7? 
  
  const x = 2; 
  let y = 4; 
  function update(arg) { 
    return Math.random() + y * arg; 
  } 
  y = 2; 
  // ?; 
  const result = update(x); 





  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h2>About Me</h2>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-para">
        <p>Experienced Full Stack Developer with additional background in continuing education, project management, healthcare research, public health surveillance, and exercise physiology.</p>
        <p>Seeking opportunities to build cool stuff.</p>
        <Link to="/resume">
          <p>View my complete resume</p>
        </Link>

      </div>
      <div className='about-sections container'>
        <div className="about-graphic-desktop">
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faHtml5} color="#DD0031" id="face1"/>
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faNpm} color="orange" width="85%"/>
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faNodeJs} color="green"/>
              </div>
            </div>
          </div>
        </div>
        <div className="about-graphic-mobile">
          <div className="stage-cube-cont-mobile">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faHtml5} color="#DD0031" width="70%"/>
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" width="70%"/>
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" width="70%"/>
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" width="70%"/>
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faNpm} color="orange" width="72.5%"/>
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faNodeJs} color="green" width="70%"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-sections-2">
        <div className="about-achievements">
          <div className="about-achievement">
            <h3>4+</h3>
            <p>YEARS SOFTWARE EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h3>100+</h3>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h3>15+</h3>
            <p>YEARS PROFESSIONAL EXPERIENCE</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;
