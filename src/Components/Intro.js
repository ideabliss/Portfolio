import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Intro.css';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Intro = () => {
  const typewriterRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(typewriterRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        duration: 2,
        text: "I'M A FULL-STACK DEVELOPER & DIGITAL DESIGNER.",
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="intro-section py-5" ref={sectionRef}>
  <div className="container">

    {/* Navbar */}
    <div className="row navbar-row align-items-center mb-4">
      <div className="col-auto">
        <span className="nav-item text-uppercase text-muted">• 01 (Intro)</span>
      </div>
    </div>

    {/* Main Intro Content */}
    <div className="row content-row justify-content-center text-center">
      <div className="col-lg-10">
        <h2 className="intro-title mb-4">
          <span ref={typewriterRef}></span>
        </h2>
        <p className="intro-text lead mb-3">
          I build modern web and mobile apps—frontend to backend—with clean code and creative precision. From intuitive interfaces to scalable server-side solutions, I merge design thinking with technical depth to craft seamless digital experiences.
        </p>
        <p className="intro-subtitle text-muted">
          Whether it's designing pixel-perfect UIs, architecting robust APIs, or deploying full-scale applications, I bring both logic and aesthetics into every project. Passionate about performance, usability, and clean architecture, I turn ideas into reliable, scalable, and user-focused digital products.
        </p>
      </div>
    </div>

    <hr className="divider mt-5" />
  </div>
</section>

  );
};

export default Intro;
