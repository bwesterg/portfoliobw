// import { Routes, Route } from 'react-router-dom';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import React, { useRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

import linkedIn from '../../assets/linkedIn_logo.svg';
import gitHub from '../../assets/github-mark/github-mark-white.png';


if(window.location.hash) {
  window.history.replaceState("", document.title, window.location.pathname);
}


function Navbar() {
  console.log(window.location.hash);
  var urlSuffix = window.location.hash.split("#").slice(1);
  window.location.hash = urlSuffix;
 
  
  if(window.location.hash) {
    var urlSuffix = window.location.hash.split("#").slice(1);
    window.history.replaceState("poo", document.title, urlSuffix);
  }

  const [menu, setMenu] = useState("home");
  const menuReference = useRef();
  
  const open_menu = () => {
    menuReference.current.style.right="0";
  }

  const close_menu = () => {
    menuReference.current.style.right="-350px";
  }

  return (
    <div className='navbar sticky'>
       <img src={menu_open} onClick={open_menu} alt="menu_open logo" className="nav-mobile-open" />
      <ul ref={menuReference} className='nav-menu'>
        <img src={menu_close} alt="" onClick={close_menu} className="nav-mobile-close" />
        <li>
          <Link className='anchor-link' to='/#home'>            
            <p onClick={()=>setMenu("home")}>Home</p>
            {menu==="home"? <img src={underline} alt=""/>:<></>}
          </Link>
        </li>
      
        <li>
          <Link className='anchor-link' offset={50} to='/#about'>      
           <p onClick={()=>{ setMenu("about"); close_menu() }}>About</p>
          </Link>
          {menu==="about"? <img src={underline} alt=""/>:<></>}
        </li>


        <li onClick={()=>setMenu("resume")}>
          <Link to="/resume" offset={50} className='anchor-link'>Resume</Link>
          {menu==="resume"? <img src={underline} alt=""/>:<></>}
        </li>


        <li>
          <Link className='anchor-link' offset={50} to='/#portfolio'>
            <p onClick={()=>{ setMenu("portfolio"); close_menu()}}>Portfolio</p>
          </Link>
          {menu==="portfolio"? <img src={underline} alt=""/>:<></>}
        </li>
        <li>
          <Link className='anchor-link' offset={50} to='/#contact'>
            <p onClick={()=>{setMenu("contact"); close_menu()}}>Contact</p>
          </Link>
          {menu==="contact"? <img src={underline} alt=""/>:<></>}
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/benton-westergaard/">
            <div className="linked-in">
              <img src={linkedIn} alt="linkedIn logo" />
            </div>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/bwesterg">
            <div className="gitHub">
              <img src={gitHub} alt="gitHub logo" />
            </div>
          </a>
        </li>

      </ul>
      {/* <AnchorLink className='anchor-link' offset={50} href='#contact'>
        <div className='nav-connect'>Connect with Me</div>
      </AnchorLink> */}
    </div>
  )
}

export default Navbar