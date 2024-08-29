import project1 from "./Images/netflix-clone.png";
import project2 from "./Images/merce.JPG";
import project3 from "./Images/Redux mern.png";
import project4 from "./Images/amazon.png";
import project5 from "./Images/mercial.png";
import project6 from "./Images/taxit.png";

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
          className="project-wrapper row-reverse"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="project-description">
            <h1>Mercial</h1>
            <p>A social media app with chat functionality</p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://mercial-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/semz-ui/mercial-frontend"
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
              src={project5}
              alt="project 5 image"
            />
          </div>
        </div>
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
            <h1>Taxit dashboard design (built using typescript)</h1>
            <p>Dashboard for a fintech company</p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://tax-it-rust.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/semz-ui/tax-it"
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
              src={project6}
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
            <h1>Merce (built using typescript)</h1>
            <p>A website buying and renting apartments(in progress)</p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://realestate-eight-green.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/semz-ui/realestate"
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
                <button className="project-btn">github</button>
              </a>
            </div>
          </div>
          <div
            className="project-img-cnt"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img className="project-img" src={project4} alt="project 3 image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
