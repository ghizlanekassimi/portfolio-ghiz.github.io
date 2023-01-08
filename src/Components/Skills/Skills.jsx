import "./Skills.css";
import Upwork from "../../img/java.png";
import Fiverr from "../../img/react.png";
import Amazon from "../../img/php.png";
import Shopify from "../../img/javascript.png";
import Facebook from "../../img/mySql.png";
import { motion } from "framer-motion";
function Skills() {
  
  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span >
          <iconify-icon icon="gridicons:computer"></iconify-icon>
            My Top Skills
          </span>
          <span></span>
          <span>
             crafting Beautiful and scalable Web products <br/>
            I have a broad range of applicable skills that <br/>I have developed over the last two years along with strong<br/> soft skills developed over the course of my career.
            
          </span>
        
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};


export default Skills