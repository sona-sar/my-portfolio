import React, { useState, useCallback } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./About.css";
import {
  X as XIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  North as NorthIcon,
} from "@mui/icons-material";

const sectionData = {
  experience: [
    { title: "Snap Engineering Academy Scholar", year: "2024" },
    { title: "USC ICT Project Intern", year: "2024" },
    { title: "Math Instructor at Mathnasium", year: "2022-2024" },
  ],
  education: [
    { title: "Loyola Marymount University", year: "2024-2026" },
    { title: "Glendale Community College", year: "2022-2024" },
    { title: "TUMO Center of Creative Technologies", year: "2017-2019" },
  ],
  skills: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "C++",
    "Java",
    "React JS",
    "React Native",
    "Node JS",
    "Supabase",
    "Firebase",
    "Git",
    "GitHub",
    "Rest APIs",
    "GDScript",
    "Godot",
    "Redux",
    "Figma",
    "Arduino",
  ],
};

const socialLinks = [
  { icon: LinkedInIcon, url: "https://www.linkedin.com/in/sona-sar/" },
  { icon: XIcon, url: "https://twitter.com/_sonasar_" },
  { icon: GitHubIcon, url: "https://github.com/sona-sar" },
  {
    icon: InstagramIcon,
    url: "https://www.instagram.com/_sonasar_?igsh=OGQ5ZDc2ODk2ZA==",
  },
];

function About() {
  const [activeSection, setActiveSection] = useState("experience");
  const [copied, setCopied] = useState(false);

  const handleButtonClick = useCallback((section) => {
    setActiveSection(section);
  }, []);

  const openLink = useCallback((url) => {
    window.open(url, "_blank");
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCopy = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div className="major-container">
      <div className="container-about">
        <div className="aboutme">
          <h4>About Me</h4>
          <div className="aboutme-options">
            {Object.keys(sectionData).map((section) => (
              <button key={section} onClick={() => handleButtonClick(section)}>
                {section}
              </button>
            ))}
          </div>
          <div className="options-result">
            <div
              className={`section-content ${
                activeSection === "experience" || activeSection === "education"
                  ? "active fade-in"
                  : ""
              }`}
            >
              {sectionData[activeSection]?.map((item, index) => (
                <div
                  key={index}
                  className={
                    activeSection === "education" ? "education-item" : ""
                  }
                >
                  <h5>{item.title}</h5>
                  <p>{item.year}</p>
                </div>
              ))}
            </div>
            {activeSection === "skills" && (
              <div className="section-content active fade-in">
                {sectionData.skills.map((skill, index) => (
                  <div key={index}>{skill}</div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="contactme">
          <h4>Contact Me</h4>
          <CopyToClipboard
            text="sargsyan.sona1.y@gmail.com"
            onCopy={handleCopy}
          >
            <p className="email">sargsyan.sona1.y@gmail.com</p>
          </CopyToClipboard>
          <div className="contact-buttons">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <div key={index} onClick={() => openLink(url)}>
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="arrow-up" onClick={scrollToTop}>
        <p>Go back up</p>
        <div>
          <NorthIcon />
        </div>
      </div>
    </div>
  );
}

export default About;
