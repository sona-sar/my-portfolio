import React, { useState, useEffect } from 'react';
import "./Body.css"
import image from './images/photo.jpg';
import image2 from './images/photo2.jpg';
import image3 from './images/photo3.jpg';
import resume from './images/resume.pdf';
import FileOpenIcon from '@mui/icons-material/FileOpen';import SouthIcon from '@mui/icons-material/South';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

function Body() {
    
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => setIsFlipped(true);
    const handleMouseLeave = () => setIsFlipped(false);
    const downloadResume = () => {
        window.open(resume, '_blank');
    };
    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/sona-sar/', '_blank');
    };

    const openGitHub = () => {
        window.open('https://github.com/sona-sar', '_blank');
    };

    const openTwitter = () => {
        window.open('https://twitter.com/_sonasar_', '_blank');
    };
  return (
    <div className = "body">
        
        <div className = "body-container">
            <div className = "body-left"> 
            
            <h1>I am Sona, currently studying Computer Science at LMU</h1>
            <p>I am constantly working on increasing my skills by working on different projects both at school and on my own. I am looking for opportunities that will further develop my knowledge and skills</p>
            
            <div className = "body-buttons">
                <div className='download-resume' onClick={downloadResume}>
                    View Resume <FileDownloadIcon/>
                </div>
                <div className = 'click-buttons'>
                    <button onClick = {openLinkedIn}>
                        <LinkedInIcon/>
                    </button>
                    <button onClick = {openGitHub}>
                        <GitHubIcon/>
                    </button>
                    <button onClick = {openTwitter}>
                        <XIcon/>
                    </button>
                </div>
                
            </div>
            
            </div>
            <div className = "body-right">
                <div className={`flip-container ${isFlipped ? 'flipped' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="flipper">
                    <img src={image} alt="Front" className="front" />
                    <img src={image3} alt="Back" className="back" />
                </div>
                </div>
            </div>
        </div>

        <div className='scrolldown-body'>
            <p>My Projects</p>
            <SouthIcon/>
        </div>
        
    </div>
  )
}

export default Body
