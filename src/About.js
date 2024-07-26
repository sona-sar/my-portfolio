import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import "./About.css";
import { X as XIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Instagram as InstagramIcon } from '@mui/icons-material';
import NorthIcon from '@mui/icons-material/North';

function About() {
  const [textToCopy, setTextToCopy] = useState('Click to copy this text!');
  const [copied, setCopied] = useState(false);

  const [activeSection, setActiveSection] = useState('experience');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className = 'major-container'>
    <div className="container-about">
      <div className='aboutme'>
        <h4>About Me</h4>
        <div className='aboutme-options'>
          <button onClick={() => handleButtonClick('experience')}>Experience</button>
          <button onClick={() => handleButtonClick('education')}>Education</button>
          <button onClick={() => handleButtonClick('skills')}>Skills</button>
        </div>
        <div className="options-result">
          <div className={`section-content ${activeSection === 'experience' ? 'active fade-in' : ''}`}>
            <div>
              <h5>Snap Engineering Academy Scholar</h5>
              <p>2024</p>
            </div>
            <div>
              <h5>USC ICT Project Intern</h5>
              <p>2024</p>
            </div>
            <div>
              <h5>Math Instructor at Mathnasium</h5>
              <p>2022-2024</p>
            </div>
          </div>
          <div className={`section-content ${activeSection === 'education' ? 'active fade-in' : ''}`}>
            <div className='education-item'>
              <h5>Loyola Marymount University</h5>
              <p>2024-2026</p>
            </div>
            <div className='education-item'>
              <h5>Glendale Community College</h5>
              <p>2022-2024</p>
            </div>
            <div className='education-item'>
              <h5>TUMO Center of Creative Technologies</h5>
              <p>2017-2019</p>
            </div>
          </div>
          <div className={`section-content ${activeSection === 'skills' ? 'active fade-in' : ''}`}>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>C++</div>
            <div>Java</div>
            <div>React JS</div>
            <div>React Native</div>
            <div>Node JS</div>
            <div>Supabase</div>
            <div>Firebase</div>
            <div>Git</div>
            <div>GitHub</div>
            <div>Rest APIs</div>
            <div>GDScript</div>
            <div>Godot</div>
            <div>Redux</div>
            <div>Figma</div>
            <div>Arduino</div>
          </div>
        </div>
      </div>
      <div className='contactme'>
        <h4>Contact Me</h4>
        <CopyToClipboard 
    text='sargsyan.sona1.y@gmail.com' 
    onCopy={() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }}
  >
    <p className='email'>
      sargsyan.sona1.y@gmail.com
    </p>
  </CopyToClipboard>
        <div className='contact-buttons'>
          <div onClick={() => openLink('https://www.linkedin.com/in/sona-sar/')}>
            <LinkedInIcon />
          </div>
          <div onClick={() => openLink('https://twitter.com/_sonasar_')}>
            <XIcon />
          </div>
          <div onClick={() => openLink('https://github.com/sona-sar')}>
            <GitHubIcon />
          </div>
          <div onClick={() => openLink('https://www.instagram.com/_sonasar_?igsh=OGQ5ZDc2ODk2ZA==')}>
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
    <div className='arrow-up' onClick = {scrollToTop}>
        <p>Go back up</p>
        <div>
          <NorthIcon/>
        </div>
      </div>
    </div>
  );
}

export default About;
