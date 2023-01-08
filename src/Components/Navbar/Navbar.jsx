import React from "react";
import logo from "../../img/logo2.png";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">
          <img src={logo} alt=""/>
        </div>
    
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="About" spy={true} smooth={true}>
              Who I am
              </Link>
            </li>
            <li>
              <Link to="Experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
              Skills
              </Link>
            </li>
            <li>
              <Link to="Projects" spy={true} smooth={true}>
              Projects
              </Link>
            </li>
            
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;