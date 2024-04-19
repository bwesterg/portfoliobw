import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "12e2e718-61aa-4c66-bec8-932770aca8d4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h2>Contact Me</h2>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's Talk</h2>
          <p>I'm always looking for new challenges, and would love to talk about a new project.</p>
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
        <form onSubmit={onSubmit} className='contact-right'>
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
