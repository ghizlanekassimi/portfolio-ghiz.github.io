import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="https://github.com/ghizlanekassimi"><iconify-icon icon="mdi:github"></iconify-icon></a>
        Copyrights © 2022 Kassimi Ghizlane
      </div>
    </div>
  );
};

export default Footer;