import React, { useState, useEffect } from 'react';
import './Stack.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import frontendIcon from '../IMAGE/frontend.png';
import backendIcon from '../IMAGE/backend.webp';
import flutterIcon from '../IMAGE/app.png';
import designIcon from '../IMAGE/design.png';

const tools = [
  {
    name: 'Front-end Developer',
    description: 'I create responsive, interactive, and visually engaging web interfaces using HTML, CSS, JavaScript, React, GSAP, Bootstrap, and Tailwind.',
    mobileDescription: 'I build stunning, responsive front-end interfaces.',
    img: frontendIcon,
  },
  {
    name: 'Back-end Developer',
    description: 'I build scalable, secure, and efficient server-side applications using Node.js, Python, Flask, and Firebase.',
    mobileDescription: 'I handle secure, scalable backend logic.',
    img: backendIcon,
  },
  {
    name: 'App Developer',
    description: 'I develop cross-platform mobile apps with smooth performance and native-like experiences using Flutter.',
    mobileDescription: 'I create fast cross-platform apps using a flutter.',
    img: flutterIcon,
  },
  {
    name: 'Digital Designer',
    description: 'I create user-centered UI/UX designs and stunning graphics using Figma and Photoshop.',
    mobileDescription: 'I design engaging UI/UX and graphics.',
    img: designIcon,
  },
];

const Stack = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setAtTop(window.scrollY < 100);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`stack py-5 ${atTop ? 'top-margin' : ''}`}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="text-white display-5 fw-bold">
              My <span className="text-warning">Expertise</span>
            </h1>
            <p className="text-light mt-2">
              From beautiful interfaces to powerful backend logic, here's what I do best.
            </p>
          </div>
        </div>

        <div className="row">
          {tools.map((tool, index) => (
            <div className="col-12 col-md-6 mb-4" key={index}>
              <div className="stack-item d-flex">
                <img src={tool.img} alt={tool.name} className="stack-icon me-3" />
                <div className="stack-info">
                  <h2>{tool.name}</h2>
                  <p>{isMobile ? tool.mobileDescription : tool.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
