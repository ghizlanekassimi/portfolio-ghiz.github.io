import React from "react";
import "./Contact.css";

const Contact = () => {

  return (
    <div className="contact-form" id="contact">
    <span>Contact me </span>
  
    <div className="hire">
        
      <div className="hire1">
      <span> <iconify-icon icon="ic:round-email"></iconify-icon></span>
      <span>Email</span>
      <a href = "mailto: ghizlanekassimi@gmail.com">ghizlanekassimi8@gmail.com</a>
      </div>
      <div className="hire1">
      <span><iconify-icon icon="mdi:linkedin"></iconify-icon></span>
      <span>Linkedin</span>
      <a href="https://www.linkedin.com/in/ghizlane-kassimi-95b485238" ><span>Click Here</span></a>
      </div>
      <div className="hire1">
      <span><iconify-icon icon="material-symbols:phone-in-talk-outline"></iconify-icon>   </span>
        <span>Telephone</span>
        <span>0643121320</span>
         </div>
            
    
    </div>
    </div>
  );
};

export default Contact;