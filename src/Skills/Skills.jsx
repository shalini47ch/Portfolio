import React from "react";
import "./style.css";
import Button from "./Button";
import WebTech from "./WebTech";
import Deploy from "./Deploy";
import Library from "./Library"
import Tools from './Tools'

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="programming-languages">
         <span>Languages</span>
       <Button/>
       </div>
       <div className="web-tech">
       <span>Web Technologies</span>
       <WebTech/>
       </div>
       <div className="deploy">
       <span>Deployment</span>
       <Deploy/>
       </div>
       <div className="library">
         <span>Libraries and Frameworks</span>
       <Library/>
       </div>
       <div className="tools">
       <span>Tools</span>
       <Tools/>
       </div>


         
         
        </div>
    </>
  );
};
export default Skills;
