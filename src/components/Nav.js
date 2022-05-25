import "../styles.css";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header>
      <h2 className="logo" style={{ marginLeft: "20px" }}>
        Michael
      </h2>
      <nav>
        <div className="hamburger " onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "#000", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu style={{ color: "#000", width: "40px", height: "40px" }} />
          )}
        </div>
        <ul className={`menuNav nav-ul ${navbarOpen ? " showMenu" : ""}`}>
          <li className="nav-li">
            <a className="navbar-a" href="#home">
              Home
            </a>
          </li>
          <li className="nav-li">
            <a className="navbar-a" href="#about">
              About
            </a>
          </li>
          <li className="nav-li">
            <a className="navbar-a" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-li">
            <a className="navbar-a" href="#certificate">
              Certificate
            </a>
          </li>
          <li className="nav-li">
            <a
              className="  contact-btn-a"
              href="mailto:michaeltimilehin36@gmail.com? subject=message from portfolio"
            >
              <button className="contact-btn">
                Contact <FiMail />
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
