import React from 'react';
import './Footer.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import user_icon from '../../assets/user_icon.svg';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={theme_pattern} alt="" />
          <p>Benton Westergaard</p>
        </div>
        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt=""/>
            <input type="email" placeholder="Add your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div> */}
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2024 Benton Westergaard. All rights reserved.</p>
        <div className="footer-bottom-right">
          {/* <p>80px 140px</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
