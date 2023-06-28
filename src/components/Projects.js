import project1 from "./Images/netflix-clone.png";
import project2 from "./Images/taskify.png";
import project3 from "./Images/Redux mern.png";
import project4 from "./Images/amazon.png";

function Projects() {
  return (
    <section
      id="projects"
      className="project-section"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="project-section-h1">Projects</h1>
      <h2 className="project-section-h2">A selection of my projects</h2>
      <div className="projects-cnt">
        <div
          className="project-wrapper"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="project-description">
            <h1>My Netflix Clone</h1>
            <p>
              {" "}
              A netflix clone where you can watch trailer videos of movies
              available
            </p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://netflix-clone-edc64.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/semz-ui/Netflix__clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Github</button>
              </a>
            </div>
          </div>
          <div
            className="project-img-cnt"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img className="project-img" src={project1} alt="project 1 image" />
          </div>
        </div>
        <div
          className="project-wrapper row-reverse"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="project-description">
            <h1>Taskify (built using typescript)</h1>
            <p>A website for setting tasks</p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://mern-typescript.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/semz-ui/mern-typescript"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Github</button>
              </a>
            </div>
          </div>
          <div
            className="project-img-cnt"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img
              className="project-img "
              src={project2}
              alt="project 2 image"
            />
          </div>
        </div>
        <div
          className="project-wrapper"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="project-description">
            <h1>Goal Mern Stack</h1>
            <p>
              A website which users can set goals for what they want they want
              to achieve
            </p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://goalsbndfront-d5vp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/semz-ui/goalsbndfront.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">github</button>
              </a>
            </div>
          </div>
          <div
            className="project-img-cnt"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img className="project-img" src={project3} alt="project 3 image" />
          </div>
        </div>
        <div
          className="project-wrapper row-reverse"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="project-description">
            <h1>Amazon clone Mern Stack</h1>
            <p>An e-commerce mern stack app with the looks of Amazon</p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://amazon-clone-ecru-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/semz-ui/Amazon-clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Github</button>
              </a>
            </div>
          </div>
          <div
            className="project-img-cnt"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img className="project-img" src={project4} alt="project 4 image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
