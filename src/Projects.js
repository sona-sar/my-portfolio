import React from 'react'
import "./Projects.css"

function Projects() {
    const openCalculator = () => {
        window.open('https://github.com/sona-sar/calculator', '_blank');
    };
    const openArmeniaGo = () => {
        window.open('https://sona-sar.github.io/armeniago/', '_blank');
    };
    const openLinkedinClone = () => {
        window.open('https://github.com/sona-sar/linkedin-clone', '_blank');
    };
    const openGodotGame = () => {
        window.open('https://github.com/sona-sar/Godotik-Game', '_blank');
    };
    const openTictactoe = () => {
        window.open('https://github.com/sona-sar/tic-tac-toe', '_blank');
    };
    const openSlidePuzzleGame = () => {
        window.open('https://github.com/sona-sar/slide-puzzle-game', '_blank');
    };
    const openWeatherApp = () => {
        window.open('https://github.com/sona-sar/weather-web-app', '_blank');
    };
    const openDoodleJump = () => {
        window.open('https://github.com/sona-sar/doodle-jump', '_blank');
    };
    const openFlappyBird = () => {
        window.open('https://github.com/sona-sar/flappy-bird-web-game', '_blank');
    };
  return (
    <div className='Projects'>
        <div className = "projects-container">
            <div className = "project">
                <button onClick = {openCalculator}>View in GitHub</button>
                <p>Calculator</p>
                <div className = "skills-project">
                    <button>HTML</button>
                    <button>JS</button>
                    <button>CSS</button>
                </div>
            </div>
            <div className = "project">
                <button onClick = {openArmeniaGo}>View in Web</button>
                <p>ArmeniaGo</p>
                <div className = "skills-project">
                    <button>HTML</button>
                    <button>JS</button>
                    <button>CSS</button>
                </div>
            </div>
            <div className = "project">
                <button onClick = {openLinkedinClone}>View in GitHub</button>
                <p>LinkedIn Clone</p>
                <div className = "skills-project">
                    <button>React</button>
                    <button>Redux</button>
                    <button>Firebase</button>
                </div>
            </div>
            <div className = "project">
                <button onClick = {openGodotGame}>View in GitHub</button>
                <p>Godot Game</p>
                <div className = "skills-project">
                    <button>Godot</button>
                    <button>GDScript</button>
                </div>
            </div>
            <div className = "project">
                <button onClick = {openTictactoe}>View in GitHub</button>
                <p>Tic Tac Toe</p>
                <div className = "skills-project">
                    <button>HTML</button>
                    <button>JS</button>
                    <button>CSS</button>        
                </div>
            </div>
            <div className = "project">
                <button onClick = {openSlidePuzzleGame}>View in GitHub</button>
                <p>Slide Puzzle Game</p>
                <div className = "skills-project">
                    <button>HTML</button>
                    <button>JS</button>
                    <button>CSS</button>
                </div>
            </div>
            <div className = "project">
                <button onClick = {openWeatherApp}>View in GitHub</button>
                <p>Weather App</p>
                <div className = "skills-project">
                    <button>HTML</button>
                    <button>JS</button>
                    <button>CSS</button>
                </div>
            </div>
            <div className = "project">
                <button onClick = {openDoodleJump}>View in GitHub</button>
                <p>Doodle Jump</p>
                <div className = "skills-project">
                    <button>HTML</button>
                    <button>JS</button>
                    <button>CSS</button>
                </div>
            </div>
            <div className = "project">
                <button onClick = {openFlappyBird}>View in GitHub</button>
                <p>Flappy Bird</p>
                <div className = "skills-project">
                    <button>HTML</button>
                    <button>JS</button>
                    <button>CSS</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Projects
