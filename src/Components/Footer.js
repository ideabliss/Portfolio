import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* Fixed Bottom Banner - Hidden on mobile */}
      <div className="scroll-banner container-fluid d-none d-sm-flex">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="scrolling-text">
            <span>
              Designer &nbsp;&nbsp;Developer &nbsp;&nbsp;Programmer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Designer &nbsp;&nbsp;Developer &nbsp;&nbsp;Programmer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Designer &nbsp;&nbsp;Developer &nbsp;&nbsp;Programmer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
       <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn resume-btn">
  Download Resume
</a>

        </div>
      </div>

      <footer className="footer bg-dark text-light pt-4" style={{ paddingBottom: '5px' }}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pb-3 gap-3">
            {/* Left: Social Icons */}
            <div className="social-icons d-flex align-items-center gap-3 mb-0">
              <a
                href="https://github.com/ideabliss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-light fs-4"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-shinde45"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-light fs-4"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Center: All Rights Reserved */}
            <div className="small mb-0" style={{ fontSize: '14px', color: '#ffff' }}>
              © {new Date().getFullYear()} Adii Shinde. All rights reserved.
            </div>

            {/* Right: Resume button for mobile only */}
            <div className="d-flex d-sm-none flex-column gap-2">
              <a href="/resume.pdf" download className="btn btn-warning rounded-pill shadow-sm px-4">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
