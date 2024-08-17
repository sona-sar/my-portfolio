import React from "react";
import "./Projects.css";

const projectData = [
  {
    name: "Hive",
    url: "https://github.com/sona-sar/snap-hive",
    skills: ["React Native", "Supabase"],
  },
  {
    name: "Snapchat Events",
    url: "https://github.com/sona-sar/snap-events-feature",
    skills: ["React Native", "Supabase"],
  },
  {
    name: "Kinoman",
    url: "https://github.com/sona-sar/kinoman",
    skills: ["ReactJS", "Rest APIs"],
  },
  {
    name: "ArmeniaGo",
    url: "https://sona-sar.github.io/armeniago/",
    skills: ["HTML", "JS", "CSS"],
    viewText: "View in Web",
  },
  {
    name: "LinkedIn Clone",
    url: "https://github.com/sona-sar/linkedin-clone",
    skills: ["React", "Redux", "Firebase"],
  },
  {
    name: "Godot Game",
    url: "https://github.com/sona-sar/Godotik-Game",
    skills: ["Godot", "GDScript"],
  },
  {
    name: "Tic Tac Toe",
    url: "https://github.com/sona-sar/tic-tac-toe",
    skills: ["HTML", "JS", "CSS"],
  },
  {
    name: "Slide Puzzle Game",
    url: "https://github.com/sona-sar/slide-puzzle-game",
    skills: ["HTML", "JS", "CSS"],
  },
  {
    name: "Weather App",
    url: "https://github.com/sona-sar/weather-web-app",
    skills: ["HTML", "JS", "CSS"],
  },
  {
    name: "Doodle Jump",
    url: "https://github.com/sona-sar/doodle-jump",
    skills: ["HTML", "JS", "CSS"],
  },
  {
    name: "Flappy Bird",
    url: "https://github.com/sona-sar/flappy-bird-web-game",
    skills: ["HTML", "JS", "CSS"],
  },
  {
    name: "Calculator",
    url: "https://github.com/sona-sar/calculator",
    skills: ["HTML", "JS", "CSS"],
  },
];

function Projects() {
  const openUrl = (url) => () => window.open(url, "_blank");

  return (
    <div className="Projects">
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project" key={index}>
            <button onClick={openUrl(project.url)}>
              {project.viewText || "View in GitHub"}
            </button>
            <p>{project.name}</p>
            <div className="skills-project">
              {project.skills.map((skill, skillIndex) => (
                <button key={skillIndex}>{skill}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
