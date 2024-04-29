import React from 'react';
import './MyWork.css';
import them_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id="portfolio" className='mywork'>
      <div className="mywork-title">
        <h2>Professional Work</h2>
        <img src={them_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
          return ( 
            <div className="work-thumbnail-box" key={index} >
              <p className='work-title'>{work.w_title}</p>
              <a href={work.w_url} target="_blank">
                <img key={index} src={work.w_img} alt=""/>
              </a>
            </div>
          )
        })}
      </div>
      <div className="mywork-showmore">
        <p>See More</p>chairlift
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
