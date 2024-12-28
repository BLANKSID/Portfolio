import React from "react";
import './styles/AboutMe.css';
import mypic from './pic/mypic.jpg';

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* Left Side */}
      <div className="left-side">
        <a href="#" className="photo">
          <img src={mypic} alt="Siddhartha Trivedi" />
          <div className="glow-wrap">
            <i className="glow"></i>
          </div>
        </a>
      </div>

      {/* Right Side */}
      <div className="right-side">
        {/* Animated Text */}
        <div className="animated-name">
          <h1>Siddhartha Trivedi</h1>
        </div>

        {/* Paragraph */}
        <div className="about-paragraph">
          <p>
            I'm a passionate developer with a focus on full-stack development. I enjoy solving problems, learning new technologies, and collaborating with others to create innovative solutions. My journey in tech has led me to work with various programming languages and frameworks, with a particular interest in business analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
