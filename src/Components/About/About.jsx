import React from 'react'
import './About.css'
import about_img from '../../assets/background2.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className='about-right'>
            <h3>ABOUT GUARDIAN FOREST</h3>
            <h2>Build a Strategy, Protect Nature, Become a Legend</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos ipsa iusto vel consectetur commodi laudantium laborum quo tenetur quisquam deleniti, quas optio sit eveniet eius voluptatem molestias mollitia officiis.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore praesentium cupiditate ipsam! Placeat corrupti vitae quisquam nesciunt repellendus! Asperiores doloribus, est sed laborum vitae harum possimus magnam illo ut assumenda.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit temporibus possimus soluta quo earum fuga eos quam impedit aspernatur omnis nesciunt sint ut magni molestiae labore, consequuntur quas reprehenderit!</p>
        </div>
    </div>
  )
}

export default About
