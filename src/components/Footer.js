import "../styles.css";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer>
      <div className="links-cnt">
        <h2>Links</h2>
        <ul className="footer-ul">
          <li className="footer-li">
            <a className="footer-a" href="#home">
              Home
            </a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="#about">
              About
            </a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-icons">
        <h2>Get in touch</h2>
        <IconContext.Provider value={{ className: "media-icons  " }}>
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
          <p>&#169;2022 created by Olotu Michael</p>
        </IconContext.Provider>
      </div>
    </footer>
  );
}

export default Footer;
