// import { Routes, Route } from 'react-router-dom';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import React, { useRef, useState, useCallback } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

import linkedIn from '../../assets/linkedIn_logo.svg';
import gitHub from '../../assets/github-mark/github-mark-white.png';
import { useLocation } from 'react-router-dom';



function Navbar() {
  // var urlSuffix = window.location.hash.split("#").pop(1);
  // var url = window.location.;
  // console.log(url.pathname)
  // var splitUrl = url.split('/');  
  // if(window.location.hash) {
  //   var urlSuffix = window.location.hash.split("#").slice(1);
  //   window.history.replaceState("poo", document.title, urlSuffix);
  // }

  const [menu, setMenu] = useState("home");
  const [pathway, setPathway] = useState("/");
  const menuReference = useRef();

  // if (useLocation().pathname === "/resume"){
  //   setMenu("resume");
  //   preventDefault();
  // }

  
  const open_menu = () => {
    menuReference.current.style.right="0";
  }

  const close_menu = () => {
    menuReference.current.style.right="-350px";
  }

  const hash = window.location.hash;
  console.log(window.location.hash);

  return (
    <div className='navbar sticky'>
       <img src={menu_open} onClick={open_menu} alt="menu_open logo" className="nav-mobile-open" />
      <ul ref={menuReference} className='nav-menu'>
        <img src={menu_close} alt="" onClick={close_menu} className="nav-mobile-close" />
        <li>
          <Link className='anchor-link' to='/home'>            
            <p onClick={()=>setMenu("home")}>Home</p>
            {useLocation().pathname !== "/resume" && menu==="home" && hash === "" ? <img src={underline} alt=""/>:<></>}
          </Link>
        </li>
      
        <li>
          <Link className='anchor-link' offset={50} to='/#about'>      
           <p onClick={()=>{ setMenu("about"); close_menu() }}>About</p>
          </Link>
          {menu==="about" || hash==="#about"? <img src={underline} alt=""/>:<></>}
        </li>


        <li onClick={()=>setMenu("resume")}>
          <Link  to="/resume" offset={50} className='anchor-link'>Resume</Link>
          {useLocation().pathname === "/resume" ? <img src={underline} alt=""/>:<></>}
        </li>


        <li>
          <Link className='anchor-link' offset={50} to='/#portfolio'>
            <p onClick={()=>{ setMenu("portfolio"); close_menu()}}>Portfolio</p>
          </Link>
          {menu==="portfolio" || hash==="#portfolio"? <img src={underline} alt=""/>:<></>}
          {/* {urlSuffix === "portfolio" ? <img src={underline} alt=""/>:<></>} */}
        </li>
        <li>
          <Link className='anchor-link' offset={50} to='/#contact'>
            <p onClick={()=>{setMenu("contact"); close_menu()}}>Contact</p>
          </Link>
          {menu==="contact" || hash==="#contact"? <img src={underline} alt=""/>:<></>}
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