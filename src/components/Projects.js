import project1 from "./Images/netflix-clone.png";
import project2 from "./Images/toonpunk.png";
import project3 from "./Images/motivate.png";
import project4 from "./Images/amazon.png";

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h1 className="project-section-h1">Projects</h1>
      <h2 className="project-section-h2">A selection of my projects</h2>
      <div className="projects-cnt">
        <div className="project-wrapper">
          <div className="project-description">
            <h1>My Netflix Clone</h1>
            <p></p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://netflix-clone-edc64.web.app/"
              >
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/semz-ui/Netflix__clone"
              >
                <button className="project-btn">Github</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img className="project-img" src={project1} alt="project 1 image" />
          </div>
        </div>
        <div className="project-wrapper row-reverse">
          <div className="project-description">
            <h1>Toon Punks</h1>
            <p></p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="http://toonpunks-demo.herokuapp.com/"
              >
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/semz-ui/Toonpunks"
              >
                <button className="project-btn">Github</button>
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
        <div className="project-wrapper">
          <div className="project-description">
            <h1>Motivation Website</h1>
            <p></p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://unique-sunburst-b3fd35.netlify.app/"
              >
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/semz-ui/frontend"
              >
                <button className="project-btn">github</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img className="project-img" src={project3} alt="project 3 image" />
          </div>
        </div>
        <div className="project-wrapper row-reverse">
          <div className="project-description">
            <h1>Amazon clone</h1>
            <p></p>
            <div className="btn-wrapper">
              <a className="project-btn-a" href="#">
                <button className="project-btn">Live</button>
              </a>
              <a className="project-btn-a" href="#">
                <button className="project-btn">Github</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img className="project-img" src={project4} alt="project 4 image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
