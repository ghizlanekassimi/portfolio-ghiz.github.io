import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import imgperso from "../../img/img5.png";
import Resume from './cvAnglais.pdf';

import {motion} from "framer-motion"

const Intro = () => {
  // Transition
  const transition = {type :'spring',duration :3}

 

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div
          className="blur "
          style={{
            background: "#F9DADA",
            top: "10rem",
            width: "35rem",
            height: "11rem",
            left: "-9rem",
            
          }}
        ></div>
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          
          <span >Hi There!👋 I'm</span>
          <span>Ghizlane Kassimi</span>
          <span>
          This is my official portfolio website that introduce me and showes
all details and some of web/mobile projects that i've worked on.
          </span>
        </div>
        <a href={Resume} download>
          <button className="button i-button">Download my resume</button>
          </a>
      </div>
      {/* right image side */}
      <motion.div className="i-right"
        transition={transition}
        >
    
        <img src={Vector1} alt="" />
        {/* <img src={Vector2} alt="" /> */}
        <img
          src={imgperso}
          alt=""
        /> 
        
      
        
</motion.div>
      <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
    </div>
  );
};

export default Intro;