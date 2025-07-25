import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/3.png'
import gallery_2 from '../../assets/2.png'
import gallery_3 from '../../assets/3.png'
import gallery_4 from '../../assets/2.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See More <img src={white_arrow} alt="arrow icon" /></button>
    </div>
  )
}

export default Campus
