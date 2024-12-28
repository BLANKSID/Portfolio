// src/FirstDiv.js
import React, { useEffect } from 'react';
import './styles/FirstDiv.css'; // Import the CSS file for styles
import gsap from 'gsap'; // Import GSAP for animations

const FirstDiv = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    document.body.addEventListener('mousemove', (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;
      
      gsap.set(cursor, {
        x: mouseX,
        y: mouseY
      });
      
      gsap.to('.shape', {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
      });
    });
  }, []); // Empty dependency array ensures this runs once after component mounts

  return (
    <div>
      <div className="cursor"></div>
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="content">
        <h1>Hey there!<br />It's Siddhartha Trivedi</h1>
        <h5>Nice to meet you!!</h5>
      </div>
    </div>
  );
};

export default FirstDiv;
