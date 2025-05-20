import React, { useEffect } from 'react';
import cursorImg from '../IMAGE/cursor.png'; // ✅ Import the cursor image
import './CustomCursor.css';

const CustomCursor = () => {
useEffect(() => {
  const cursor = document.querySelector('.gaming-cursor');
  let mouseX = 0, mouseY = 0;

  const moveCursor = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const animate = () => {
    if (cursor) {
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    }
    requestAnimationFrame(animate);
  };

  window.addEventListener('mousemove', moveCursor);
  animate();

  return () => {
    window.removeEventListener('mousemove', moveCursor);
  };
}, []);


  return (
    <img
      src={cursorImg}
      alt="Custom Cursor"
      className="gaming-cursor"
    />
  );
};

export default CustomCursor;
