import "../styles.css";
import coder from "./Images/ilex.jpg";
// react icons
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

function Hero() {
  return (
    <IconContext.Provider value={{ className: "media-icons" }}>
      <section
        id="home"
        className="hero--cnt"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="hero-text-cnt">
          <h1 className="name">Hi, I'm Michael</h1>
          <h1 className="job-title">Fullstack Developer</h1>
          <div className="flex-icons">
            <a href="https://www.linkedin.com/in/olotu-michael-936553221/">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/semz01">
              <FaTwitterSquare />
            </a>
            <a href="https://github.com/semz-ui/">
              <FaGithub />
            </a>
            <a href="mailto:michaeltimilehin36@gmail.com? subject=message from portfolio">
              <HiOutlineMail />
            </a>
          </div>
          <p>I love to level up my skills!</p>
        </div>
        <div className="hero-img-cnt">
          <img className="hero-img" src={coder} alt="programmer" />
        </div>
      </section>
    </IconContext.Provider>
  );
}

export default Hero;
