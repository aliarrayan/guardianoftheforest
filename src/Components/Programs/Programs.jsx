import React from 'react'
import './Programs.css'
import programs_1 from '../../assets/2.png'
import programs_2 from '../../assets/Grass.png'
import programs_3 from '../../assets/3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={programs_1} alt="" />
        </div>
        <div className='program'>
            <img src={programs_2} alt="" />
        </div>
        <div className='program'>
            <img src={programs_3} alt="" />
        </div>
    </div>
  )
}

export default Programs
