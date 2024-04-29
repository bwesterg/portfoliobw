import { React } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import theme_pattern from '../assets/theme_pattern.svg';

import './Resume.css';
import BW_profile from "../assets/BW_profile.jpg";
import BW_Resume from "../assets/Benton_Westergaard_Resume_2024.pdf";
import {techSkills_data, genSkills_data} from '../assets/myskills_data';


const Resume = () => {

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
    <>
      <Navbar />
      <div className="resume-page-container">
        <div id="resume-home" className='resume'>
          <div className="image-and-name">
            <div className="resume-image">
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
              <div className="resume-action">
                <div className="resume-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                  Connect with me
                </AnchorLink>
                </div>
                <div className="resume-resume" onClick={handleDownload}>Downloadable resume</div>
              </div>
            </div>
          </div>
        </div>
            {/* <div className="downloadable-resume" onClick={handleDownload}>Downloadable Resume</div> */}
          <div className="resume-text">
            <div className="resume-section">
              <div className="myresume">
                <div className="myresume-title">
                  <h2>My Resume</h2>
                  <img src={theme_pattern} alt="" />
                </div>
              </div>
              <h3 className="resume-section-title">Experience</h3>
              <h4 className="position-headline">Jr Web Developer<span className="position-details">, Black Dog Digital Agency - Denver, CO | Oct, 2021 - Apr, 2023</span></h4>
              <div className="BLKDG-description">
                <ul>
                  <li>Developed, updated, and maintained web applications using CSS, HTML, JavaScript, Node, PHP, SQL, jQuery, Liquid, React, TypeScript, and Git / GitHub source control.</li>
                  <li>Extensive usage of modern CSS, preprocessors (SASS, LESS), and CSS libraries (Bootstrap, Tailwind).</li>
                  <li>Managed build tools, bundlers and web frameworks (Grunt, Gulp, Laravel, NPM, Vite, Webpack).</li>
                  <li>Integrated AJAX calls and other asynchronous website functionality.</li>
                  <li>Implemented web component libraries (Web Components, Material UI, React-Bootstrap, etc.).</li>
                  <li>Tested and updated websites for WCAG 2.0 508 compliance.</li>
                  <li>Collaborated with UI/UX Designers and Project Managers to develop, test, and iterate upon dynamic user features; incorporating feedback for continuous improvement.</li>
                  <li>Participated in Agile and CI/CD workflows; contributing to code reviews, meetings and cycles.</li>
                </ul>
              </div>
              <h4 className="position-headline">Project Manager<span className="position-details">, University of CO School of Pharmacy - Aurora, CO	| 10 Years, 2 Months</span></h4>
              <div className="SOP-description">
                <ul>
                  <li>Managed continuing education planning, accreditation, accounting, and data analysis.</li>
                  <li>Cultivated international partner relationships and accreditation services.</li>
                  <li>Drafted and managed RFIs, RFQs, RFPs.</li>
                  <li>Implemented automated online credit distribution system and data management functions.</li>
                  <li>Authored 2012 and 2018 ACPE reaccreditation reports, each earning 6-year reaccreditation with commendation.</li>
                  <li>Expanded office revenue 5x and participation 10x.</li>
                  <li>Analyzed participation results and feedback; advised instructors on educational content structure, needs assessment, and integration of learning assessment tools.</li>
                </ul>
              </div>
              <h4 className="position-headline">Research Assistant<span className="position-details">, Denver Health & Hospital Authority - Denver, CO | Jan, 2007 - Oct, 2009</span></h4>
              <div className="DHHA-description">
                <ul>
                  <li>Organized and analyzed patient interventions and outreach interventions, ensuring HIPAA and IRB compliance.</li>
                  <li>Cultivated University relationships and negotiated arranged accreditation services for international partners in Australia, Canada, Egypt, and UAE.</li>
                  <li>Drafted, edited, managed, and routed contracts / Request for Proposals (RFPs).</li>
                  <li>Directed automation of online credit distribution system and data management functions.</li>
                  <li>Authored comprehensive ACPE reaccreditation reports (2012, 2018) resulting in successful reaccreditation with commendation.</li>
                  <li>Expanded office revenue 5x and participation 10x.</li>
                  <li>Analyzed participation results and feedback, and guided instructors on educational content structure, evaluation, and learning assessment.</li>
                </ul>
              </div>
              <h3 className="resume-section-title">Education</h3>
              <div className="education-section">
                <h4><span className="education-ital">Certificate, Full Stack Software Engineering</span>, Flatiron School, Denver, CO</h4>
                <div className="school-description">
                  <ul className="school-details-list">
                    <li>
                      <span className="school-dates">Dec, 2020 - May, 2021</span>
                    </li>
                  </ul>
                </div>
                <h4><span className="education-ital">BS Integrative Physiology</span>, University of Colorado, Boulder, CO</h4>
                <div className="school-description">
                  <ul className="school-details-list">
                    <li>
                      <span className="school-dates">Aug, 2002 - May, 2006</span>
                    </li>
                    <li>
                      <span className="school-dates">Dean's list; Kittredge Honors Program; Cycling Club Officer</span>
                    </li>
                  </ul>
                </div>
              </div>
              
          
              <h3 className="resume-section-title">Projects</h3>
              <div className="personal-projects-section">
                <h4>HappyEats Food Ordering Service</h4>
                <div className="projects-section-description">
                  <ul>
                    <li>Deployed MERN app (MongoDB, Express, React, Node)</li>
                    <li>Incorporates Auth0, AWS, Cloudinary, JavaScript, ShadCN Component Libraries, RESTful API consumption, Render, Stripe Payments, Tailwind, Toast Notifications, TypeScript.</li>
                    <li>
                      <p>
                        <a href="https://happy-eats-frontend.onrender.com/" target="_blank">
                          https://happy-eats-frontend.onrender.com/
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="https://github.com/bwesterg/happy_eats_frontend" target="_blank">
                          Frontend (GitHub)
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="https://github.com/bwesterg/happy_eats_backend" target="_blank">
                          Backend (GitHub)
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
                <h4>OAuth Ski Collection App</h4>
                <div className="projects-section-description">   
                  <ul>
                    <li>
                      Full stack, React app to manage user ski collections. Includes JWT encryption, OAuth, Ruby on Rails, SQL, CSS, HTML, and JavaScript.
                    </li>
                    <li>
                      <p>
                        <a href="https://github.com/bwesterg/Ruby_React_Assessment" target="_blank">
                          Front/Backend (GitHub)
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
                <h4>Golf Score App</h4>
                <div className="projects-section-description">
                  <ul>
                    <li>
                      Full stack, React app for managing golf scorecards. Utilizes React, hooks, Ruby on Rails, SQL, JavaScript, CSS, and HTML.
                    </li>
                    <li>
                      <p>
                        <a href="https://github.com/bwesterg/Golf-Score" target="_blank">
                          Front/Backend (GitHub)
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>  
                </div>
              </div>
              
            <h3 className="resume-section-title">Technical Skills</h3>
            <div className="tech-skills">
              <ul className="mapped-skillslist">
                {techSkills_data.map((skill_name, index)=>(
                  <li key={index}>{skill_name.skill}</li>
                ))}
              </ul>
            </div>

            <h3 className="resume-section-title">General Skills</h3>
            <div className="gen-skills">
              <ul className="mapped-skillslist">
              {genSkills_data
                .slice() 
                .sort((a, b) => a.skill.localeCompare(b.skill)) 
                .map((skill_name, index) => (
                  <li key={index}>{skill_name.skill}</li>
                ))}
              </ul>
            </div>
              
            
          </div>

        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default Resume;