import React, { useEffect, useRef } from "react";
import "./Banner.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Me from "../IMAGE/Me.png";
import { Link } from "react-router-dom";


const Banner = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const words = ["Developer", "Designer","Coder"];
    let currentWordIndex = 0;
    let isMounted = true;

    const typeWord = (word) => {
      return new Promise((resolve) => {
        let i = 0;
        const interval = setInterval(() => {
          if (!isMounted || !typeRef.current) {
            clearInterval(interval);
            return;
          }

          typeRef.current.textContent += word[i];
          i++;
          if (i === word.length) {
            clearInterval(interval);
            setTimeout(resolve, 1200); // Pause after full word
          }
        }, 180); // Typing speed
      });
    };

    const deleteWord = () => {
      return new Promise((resolve) => {
        const interval = setInterval(() => {
          if (!isMounted || !typeRef.current) {
            clearInterval(interval);
            return;
          }

          const currentText = typeRef.current.textContent;
          typeRef.current.textContent = currentText.slice(0, -1);

          if (currentText.length === 0) {
            clearInterval(interval);
            setTimeout(resolve, 500); // Pause after delete
          }
        }, 80); // Deleting speed
      });
    };

    const loop = async () => {
      while (isMounted) {
        const word = words[currentWordIndex];
        if (typeRef.current) typeRef.current.textContent = "";
        await typeWord(word);
        await deleteWord();
        currentWordIndex = (currentWordIndex + 1) % words.length;
      }
    };

    loop();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container banner">
      <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-12 col-md-8 text-center text-md-start mb-4 mb-md-0">
          <div className="banner-description"> <p>Hey I'm Adii Shinde</p> </div> 
          <h1 className="banner-heading">
            I am  the{" "}
            <span className="typewriter-text" ref={typeRef}></span>
            <span className="cursor">|</span>
          </h1>
          <p className="banner-description">
            Full-stack developer and digital designer crafting modern web and mobile apps from frontend to backend. I combine clean code with creative design to deliver fast, scalable, and user-friendly digital experiences.
          </p>
          <div className="banner-buttons mt-3">
  <a
    href="mailto:adityakrishnatshinde07@gmail.com?subject=Freelance%20Opportunity"
    className="btn btn-warning me-3 btn-hire"
  >
    Hire Me
  </a>
  <Link to="/contact" className="btn btn-outline-light">
    Contact Me
  </Link>
</div>
        </div>

        {/* Image Column */}
        <div className="col-12 col-md-4 text-center">
          <img src={Me} alt="Adii Shinde" className="img-fluid banner-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
