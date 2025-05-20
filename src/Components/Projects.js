import React, { useEffect, useRef, useState } from 'react';
import './Project.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import img1 from '../IMAGE/p1.png';
import img2 from '../IMAGE/p2.png';
import img3 from '../IMAGE/p3.png';
import img4 from '../IMAGE/p4.png';


gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'EaseHire – AI-Powered Hiring Portal Platform',
    description: [
      '🎯 Intelligent Matching: Uses LLaMA 3.2 to rank candidates by resume–job fit.',
      '📝 Adaptive Assessments: Dynamically generates MCQs and coding challenges via Ollama’s models.',
      '📈 Live Analytics: Tracks application flow, candidate scores, and time-to-hire in real time.',
    ],
    img: img1,
  },
  {
    title: 'Gen Scheduler – Production Scheduling System',
    description: [
      '⚙️ AI-Driven Planning: Forecasts demand and auto-optimizes daily production runs.',
      '📊 Interactive Gantt Charts: Drag-and-drop task scheduling with live dependency updates.',
      '🔔 Bottleneck Alerts: Monitors throughput and notifies teams when capacity thresholds hit.',
    ],
    img: img2,
  },
  {
    title: 'Help Hour – Home Service Marketplace',
    description: [
      '🏡 Provider Onboarding: Pros register portfolios, set availability, and customize pricing.',
      '🛒 Real-Time Booking: Customers book slots with live availability checks and secure payments.',
      '💬 In-App Chat & Reviews: Two-way messaging plus post-service ratings and feedback.',
    ],
    img: img3,
  },
  {
    title: 'Baby AI (Jarvis) – Personalized AI Assistant',
    description: [
      '🧠 Contextual Chat: Keeps conversation state for follow-ups and clarifications.',
    '🔧 System Control: Offers granular admin settings—permission levels, model-parameter tuning, and detailed audit logs for secure, compliant AI operations.',
      '🔒 Privacy-First: Client-side encryption with user-controlled data retention.',
    ],
    img: img4,
  },
 

 
];


const Project = () => {
  const imageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(projects[0].img);

  useEffect(() => {
    const triggers = [];

    projects.forEach((project, index) => {
      const trigger = ScrollTrigger.create({
        trigger: `.project-block-${index}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => switchImage(project.img),
        onEnterBack: () => switchImage(project.img),
      });
      triggers.push(trigger);
    });

    function switchImage(img) {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setCurrentImage(img);
          gsap.to(imageRef.current, { opacity: 1, duration: 0.3 });
        },
      });
    }

    return () => {
      triggers.forEach(t => t.kill());
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="projects py-5">
<div className="container-fluid px-3 px-sm-4 px-md-5 project-section">
        <h2 className="section-title text-center mb-5">Features Project</h2>
        <div className="row">
          {/* Left column: full-width on mobile, 8/12 on lg */}
          <div className="col-12 col-lg-8 text-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-block project-block-${index} d-flex mb-5`}
              >
                <div className="timeline d-flex flex-column align-items-center">
                  <div className="circle-line"></div>
                  <div className="vertical-line"></div>
                </div>
                <div className="project-content ms-4">
                  <h4 className="project-title">{project.title}</h4>
                  <ul className="project-desc">
                    {project.description.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right column: hidden on mobile, 4/12 on lg */}
          <div className="col-12 col-lg-4 d-none d-lg-flex align-items-center justify-content-center">
            <div className="project-image-wrapper">
              <img
                ref={imageRef}
                src={currentImage}
                alt="Project"
                className="project-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
