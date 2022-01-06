/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "./shalini.jpg";
import {FcGraduationCap} from "react-icons/fc"
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <img src={logo} alt="icon"/>
      <p className="user-info">
      <FcGraduationCap size="60px"/>
        <h1>
          <span>{"<"}</span>Hello World!<span>{"/>"} </span>
        </h1>
        <br />
        <div className="data">
          I am Shalini Choudhary,a Frontend Developer with hands on experience
          in HTML,CSS,JS,ReactJS.Build a lot of reusable components using
          ReactJs.Apart from frontend I am also skilled in data structures and
          algorithms. Keen interest areas include Development and Analytics
          ,have hands-on experience in python along with data visualization
          tools.Apart from technical knowledge I also like reading novels and
          painting.
        </div>
      
      </p>
     
    </div>
  );
};
export default About;
