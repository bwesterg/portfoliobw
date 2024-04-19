import React, { Component } from 'react';
import Slider from "react-slick"; 


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
    centerPadding: '50px',
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
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
    <div className="slide-container">
      <Slider {...settings}>
        {mywork_data.map((work,index)=>{
            return ( 
              <div className="work-thumbnail-box" key={index}>
                <a href={work.w_url} target="_blank">
                  <img key={index} src={work.w_img} alt=""/>
                </a>
              </div>
            )
          })}
      </Slider>
    </div>
  );
}


export default WorkSlider;