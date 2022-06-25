import React from "react";
import project1 from "./Images/udemy cert.jpg";
import project2 from "./Images/freecodecamp.png";

function Certificate() {
  return (
    <section id="projects" className="project-section">
      <h1 className="project-section-h1">Certificate</h1>
      <h2 className="project-section-h2">List of my certificate</h2>
      <div className="projects-cnt">
        <div className="project-wrapper">
          <div className="project-description">
            <h1>Udemy Certificate</h1>
            <p></p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://www.udemy.com/certificate/UC-3bdad860-960f-4a6e-b67b-51795df8f19a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Live</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img className="project-img" src={project1} alt="project 1 image" />
          </div>
        </div>
        <div className="project-wrapper row-reverse">
          <div className="project-description">
            <h1>Freecodecamp Certificate</h1>
            <p></p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://www.freecodecamp.org/certification/michaeltimi/responsive-web-design"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Live</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img
              className="project-img "
              src={project2}
              alt="project 2 image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
