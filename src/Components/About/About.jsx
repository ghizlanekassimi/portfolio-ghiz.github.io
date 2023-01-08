import React from "react";
import "./About.css";

import { motion } from "framer-motion";
import imgperso from "../../img/imgAbout.png";


function About() {


  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="About">
    
      {/* right */}
      <div className="cards">
        <img src={imgperso} alt="" />
        <div
          className="blur s-blur2"
          style={{ background: "#F5E3C1" }}
        ></div>
      </div>
        {/* left side */}
        <div className="awesome">
        {/* dark mode */}
        <span >About Me</span>
        <span>Full-stack developer</span>
        <span>
        I’m Ghizlane Kassimi, An engineering student in computer science, and also a motivated full-stack developer, but I’m more comfortable and passionate about front-end development, particulary JavaScript’s frameworks but learning a new technology catch my interest as well!
I'm excited to make the leap and continue refining my skills.If you are interested, you can scroll down to discover more about me.
        </span>


        <div className="blur s-blur1" style={{ background: "#F5E3C1" }}></div>
      </div>
    </div>
  );
}

export default About