import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo2.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />

      <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={menuOpen ? 'active' : ''}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>GAME INFO</Link></li>
        <li><Link to='programs' smooth={true} offset={0} duration={500}>MEDIA</Link></li>
        <li><Link to='about' smooth={true} offset={0} duration={500}>ARTICLE</Link></li>
        <li><Link to='campus' smooth={true} offset={0} duration={500}>SUPPORT</Link></li>
        <li><Link to='testimonials' smooth={true} offset={0} duration={500}>SOCIAL MEDIA</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>PLAY NOW</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
