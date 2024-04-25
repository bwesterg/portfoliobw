import { React } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

import './Resume.css';
import BW_profile from "../assets/BW_profile.jpg";
import BW_Resume from "../assets/Benton_Westergaard_Resume_2024.pdf";


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
              <div className="resume-resume" onClick={handleDownload}>My resume</div>
            </div>
          </div>
        </div>
        <div className="resume-text">
          <h3 className="resume-section">Experience</h3>
          <h4>Jr Web Developer, Black Dog Digital Agency - Denver, CO | Oct, 2021 - Apr, 2023</h4>
          <div className="BLKDG-description">
            <ul>
              <li>Developed, updated, and maintained full stack web applications using Node, PHP, SQL, CSS, JavaScript, jQuery, Liquid, React, TypeScript, and Git / GitHub source control.</li>
              <li>Extensive usage of modern CSS, preprocessors (SASS, LESS), and CSS libraries (Bootstrap, Tailwind).</li>
              <li>Implemented common build tools / bundlers (Grunt, Gulp, Laravel, NPM, Vite, Webpack), and tested server- and client-side JavaScript code.</li>
              <li>Implemented web component libraries (Web Components, Material UI, React-Bootstrap, etc.).</li>
              <li>Tested projects and websites for WCAG 2.0 508 compliance and engineered updates.</li>
              <li>Collaborated with UI/UX Designers and Project Managers to develop, test, and iterate upon dynamic user features, incorporating feedback for continuous improvement.</li>
              <li>Participated in Agile and CI/CD workflows, contributing to code reviews, meetings and cycles.</li>
            </ul>
          </div>
          <h4>Project Manager, University of CO School of Pharmacy - Aurora, CO	| 10 Years, 2 Months</h4>
          <div className="SOP-description">
            <ul>
              <li>Managed continuing education projects, accreditation, accounting, and data analysis.</li>
              <li>Cultivated University relationships and negotiated arranged accreditation services for international partners in Australia, Canada, Egypt, and UAE.</li>
              <li>Drafted, edited, managed, and routed contracts / Request for Proposals (RFPs).</li>
              <li>Directed automation of online credit distribution system and data management functions.</li>
              <li>Authored comprehensive ACPE reaccreditation reports (2012, 2018) resulting in successful reaccreditation with commendation.</li>
              <li>Expanded office revenue 5x and participation 10x.</li>
              <li>Analyzed participation results and feedback, and guided instructors on educational content structure, evaluation, and learning assessment.</li>
            </ul>
          </div>
          <h4>Research Assistant, Denver Health & Hospital Authority - Denver, CO | Jan, 2007 - Oct, 2009</h4>
          <div className="DHHA-description">
            <ul>
              <li>Managed continuing education projects, accreditation, accounting, and data analysis.</li>
              <li>Cultivated University relationships and negotiated arranged accreditation services for international partners in Australia, Canada, Egypt, and UAE.</li>
              <li>Drafted, edited, managed, and routed contracts / Request for Proposals (RFPs).</li>
              <li>Directed automation of online credit distribution system and data management functions.</li>
              <li>Authored comprehensive ACPE reaccreditation reports (2012, 2018) resulting in successful reaccreditation with commendation.</li>
              <li>Expanded office revenue 5x and participation 10x.</li>
              <li>Analyzed participation results and feedback, and guided instructors on educational content structure, evaluation, and learning assessment.</li>
            </ul>
          </div>
          
          {/* <h3>Selected Accomplishments</h3>
          <h3>Publications</h3> */}

          <h3 className="resume-section">Education</h3>		
            <div className="education-list">
              <h4>Certificate,  Full Stack Software Engineering, Flatiron School - Denver, CO | Dec, 2020 - May, 2021</h4>
              <h4>BS, Integrative Physiology, University of Colorado - Boulder, CO | Aug, 2002 - May, 2006</h4>
            </div>										      
          
          <h3 className="resume-section">Projects</h3>
            <div className="projects-list">
              <h4>HappyEats Food Ordering Service</h4>
                <ul>
                    <li>Deployed MERN app (MongoDB, Express, React, Node)</li>
                    <li>Incorporates Auth0, AWS, Cloudinary, JavaScript, ShadCN Component Libraries, RESTful API consumption, Render, Stripe Payments, Tailwind, Toast Notifications, TypeScript.</li>
                  </ul>
                <p>
                  <a href="https://happy-eats-frontend.onrender.com/" target="_blank">
                    https://happy-eats-frontend.onrender.com/
                  </a>
                </p>
                <p>
                  <a href="https://github.com/bwesterg/happy_eats_frontend" target="_blank">
                    Frontend (GitHub)
                  </a>
                </p>
                <p>
                  <a href="https://github.com/bwesterg/happy_eats_backend" target="_blank">
                    Backend (GitHub)
                  </a>
                </p>
              <h4>OAuth Ski Collection App</h4>
                <ul>
                  <li>
                    Full stack, React app to manage user ski collections. Includes JWT encryption, OAuth, Ruby on Rails, SQL, CSS, HTML, and JavaScript.
                  </li>
                </ul>
                <p>
                  <a href="https://github.com/bwesterg/Ruby_React_Assessment" target="_blank">
                    Front/Backend (GitHub)
                  </a>
                </p>

                <h4>Golf Score App</h4>
                <ul>
                  <li>
                    Full stack, React app for managing golf scorecards. Utilizes React, hooks, Ruby on Rails, SQL, JavaScript, CSS, and HTML.
                  </li>
                </ul>
                <p>
                  <a href="https://github.com/bwesterg/Golf-Score" target="_blank">
                    Front/Backend (GitHub)
                  </a>
                </p>
            </div>
         
          <h3 className="resume-section">Technical Skills</h3>
            <p>Accessibility, Agile Workflows, Auth0, Bootstrap, CSS3, Docker, E-Commerce, ECMAScript, ES6, Express, Git, GitHub, GraphQL, Grunt, Gulp, Heroku, HTML5, JavaScript, jQuery, JWT Encryption, Liquid, Material-UI, MongoDB, Multer, MVC Architecture, Mongoose, MySQL, NPM, Node, PHP, Playwright, PostgreSQL, React, RESTful API design, Ruby, Rails, SaaS, SASS, SCSS, SCRUM, Selenium, SharePoint, Shopify, SQLite, Tailwind, Test-Driven Development, TypeScript, Webpack, WordPress</p>

          <h3 className="resume-section">General Skills</h3>
            <p>Accounting, Accreditation, Committee Management, FDA Regulated Research, Event Management, Healthcare, Higher Education, HIPAA Compliance, IRB consultancy, Leadership, Management, Market Research, Procurement, Project Management, Public Health, SalesForce, Statistics</p>

        </div>
      </div>

      <Contact />
      <Footer />
    </>
  )
}

export default Resume;