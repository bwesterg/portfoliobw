import React, { Component } from 'react';
import Slider from "react-slick"; 
import them_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import Atticus from '../../assets/AtticusPoetCoffee.png';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WorkSlider.css";

import mywork_data from '../../assets/mywork_data';


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}

    />
  );
}




const WorkSlider = () => {
  var settings = {
    centerPadding: '10px',
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerPadding: '10px',
          centerMode: true,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '10px',
          centerMode: true,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          // centerMode: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <div className="my-portfolio" id="portfolio">
      <div className='mywork'>
        <div className="mywork-title">
          <h2>Professional Work</h2>
          <img src={them_pattern} alt="" />
        </div>
      </div>
      <div className="slide-container">
        <Slider {...settings}>
          {mywork_data.map((work,index)=>{
              return ( 
                <div className="thumbnail-and-caption" id="boxy" key={index}>
                  <div className="highlight-caption"> 
                  <a href={work.w_url} target="_blank">
                    <h3 className="project-title">{work.w_title}</h3>
                  </a>
                  </div>
                  <div className="work-thumbnail-box" key={index}>
                    <a href={work.w_url} target="_blank">
                      <img key={index} src={work.w_img} alt=""/>
                    </a>
                  </div>
                </div>
              )
            })}
        </Slider>
      </div>
    </div>
  );
}


export default WorkSlider;