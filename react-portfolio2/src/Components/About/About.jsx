import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import BW_profile from "../../assets/BW_profile.jpg"

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h2>About me</h2>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className='about-sections'>
        <div className="about-left">
          <div className="about-image">
            <img src={BW_profile} alt=""/>
          </div>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Experienced Developer with background in higher education, pharmacy, and public health.</p>
            <p>Some text some text some text some text some text some text some text some text</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p><hr style={{width: "50%"}} />
            </div>
            <div className="about-skill">
              <p>React</p><hr style={{width: "70%"}} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p><hr style={{width: "60%"}} />
            </div>
            <div className="about-skill">
              <p>Ruby on Rails</p><hr style={{width: "50%"}} />              
            </div>
            <div className="about-skill">
              <p>Node</p><hr style={{width: "50%"}} />              
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
