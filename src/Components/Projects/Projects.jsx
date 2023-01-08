import React from 'react'
import './Projects.css';
import mob1 from "../../img/solvychi.PNG";
import mob2 from "../../img/solvychi1.PNG";
import shifae1 from "../../img/Page_dAcceuil.png";
import shifae2 from "../../img/pageRecherche_Medecins.png";
import advice from "../../img/fetchApi2.png";
import chaiclub1 from "../../img/chairclub.png";
import chaiclub2 from "../../img/chairclub2.png";
import json from "../../img/Json1.png";



function Projects() {
  function handleClick(myLink){
    window.location.href=myLink;
  }
  return (
    <div className='Projects' id="Projects">
      {/* projet1 :solvychi*/}
      <span><iconify-icon icon="bytesize:code"></iconify-icon> Projects</span>
      <div className='project' onClick = {() => handleClick('https://github.com/android-finalpeoject/solvychi.git')}>
        <div className="left" 
>
          <img src={mob1} alt=""/>
          <img src={mob2} alt=""/>
          
        </div>
        <div className="right" >
        <span>Solvychi</span><br/><br/>
        <span> A android Application that a offers <br></br>to children to discover the notion<br></br> of problem solving with funny games </span>
        <hr/><br/>
        <span>Tools and Languages: </span>
        <span>
        <br/>- Java
        <br/>- SqlLite
        <br/>- Github
        </span>
        </div>        
      </div>
      {/* project2: shifae */}
      <div className='project' onClick = {() => handleClick('https://github.com/ghizlanekassimi/shifae-project.git')} >
        <div className="left left1">
          <img src={shifae1} alt=""/>
          <img src={shifae2} alt=""/>
        </div>
        <div className="right">
        <span>Shifae</span><br/><br/>
        <span> A Web Application that allows to patients<br></br>to take an online medical schedule <br></br> and having a digital carnet record <br/> + A personal space for each doctor with calender </span>
        <hr/><br/>
        <span>Tools and Languages: </span>
        <span>
        <br/>- Html
        <br/>- Css
        <br/>- JavaScript
        <br/>- Jquery
        <br/>- Ajax
        <br/>- Php
        <br/>- Github
        </span>
        </div>        
      </div>
      {/* project3 */}
      <div className='project' onClick = {() => handleClick('https://github.com/ghizlanekassimi/React-advice-api-app.git')}>
        <div className="left left2">
          <img src={advice} alt=""/>
        </div>
        <div className="right">
        <span>Reminder</span><br/><br/>
        <span> A Web Application for advicing <br></br>   </span>
        <hr/><br/>
        <span>Tools and Languages: </span>
        <span>
        <br/>- React
        <br/>- Css
        <br/>- Advice API
        </span>
        </div>        
      </div>
      {/* Project 4 */}
      <div className='project' onClick = {() => handleClick('https://github.com/ghizlanekassimi/React-Chair-Website.git')}>
        <div className="left left3">
          <img src={chaiclub1} alt=""/>
          <img src={chaiclub2} alt=""/>
        </div>
        <div className="right">
        <span>ChairClub</span><br/><br/>
        <span> A Web Application <br></br>for selling gaming Chairs  <br></br>  </span>
        <hr/><br/>
        <span>Tools and Languages: </span>
        <span>
        <br/>- React
        <br/>- Css
        <br/>- Github
        </span>
        </div>        
      </div>
      {/* Project 5 */}
      <div className='project'>
        <div className="left left2">
          <img src={json} alt=""/>
        </div>
        <div className="right">
        <span>Blogs</span><br/><br/>
        <span> A Web Application that allows  users <br></br> to share news, blogs and express themselves freely. </span>
        <hr/><br/>
        <span>Tools and Languages: </span>
        <span>
        <br/>- Html
        <br/>- Css
        <br/>- Json Server
        <br/>- Github
        </span>
        </div>        
      </div>
    </div>
  )
}

export default Projects