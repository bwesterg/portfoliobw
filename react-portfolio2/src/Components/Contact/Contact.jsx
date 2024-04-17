import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h2>Contact Me</h2>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Talk to Me</h2>
          <p>I am currently looking for new roles, so let me know if you have any opportunities.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>benton.westergaard@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+1 (303) 253-4630</p>

            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Boulder County, Colorado</p>
            </div>
          </div>
        </div>
        <form className='contact-right'>
          <label htmlFor=''>Your Name</label>
          <input type="text" placeholder="Add your name" name="name"/>
          <label htmlFor=''>Your Email</label>
          <input type="email" placeholder="Add your email" name="email"/>
          <label htmlFor=''>Message</label>
          <textarea name="message" rows="8" placeholder=""></textarea>
          <button type="submit" className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
