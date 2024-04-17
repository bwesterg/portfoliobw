import React from 'react';
import './MyWork.css';
import them_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h2>Work Samples</h2>
        <img src={them_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
          return <img key={index} src={work.w_img} alt=""/>
        })}
      </div>
      <div className="mywork-showmore">
        <p>See More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork