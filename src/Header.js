import React, { useRef, useState } from 'react';
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutMeRef = useRef(null);
  const contactMeRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToMiddle = () =>{
    window.scrollTo({
      top: document.documentElement.scrollHeight/2.95,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
  };

  return (
    <div className="header">
      <div className="portfolio-text">PORTFOLIO</div>
      <button className="menu-container" onClick={handleMenuClick}>
        <MenuIcon className="menu" sx={{ fontSize: 35 }}/>
      </button>
      <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
        <button className = "dropButton" id="about-me" onClick={scrollToBottom}>ABOUT ME</button>
        <button className = "dropButton" id="contact-me" onClick={scrollToBottom}>CONTACT ME</button>
        <button className = "dropButton" onClick={scrollToMiddle}>MY PROJECTS</button>
      </div>
      <div className="header-buttons">
        <button id="about-me" onClick={scrollToBottom}>ABOUT ME</button>
        <button id="contact-me" onClick={scrollToBottom}>CONTACT ME</button>
        <button onClick={scrollToMiddle}>MY PROJECTS</button>
      </div>
    </div>
  )
}

export default Header;
