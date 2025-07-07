import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { logEvent } from '../../lib/analytics.js'; 

const Hero = () => {
  const handleClick = () => {
    logEvent('Button', 'Clicked Free To Play');
  };

  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>Guardian Forest</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills,
          and experiences needed to excel in the dynamic field of education.
        </p>
        <button className='btn' onClick={handleClick}>
          Free To Play <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
