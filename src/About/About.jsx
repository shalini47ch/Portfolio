/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "./shalini.jpg";
import { FcGraduationCap } from "react-icons/fc";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <img src={logo} alt="icon" />
      <p className="user-info">
        <FcGraduationCap size="60px" />
        <h1>
          <span>{"<"}</span>Hello World!<span>{"/>"} </span>
        </h1>
        <br />
        <div className="data">
          <p>
            Shalini has a lot of expertise with React JS for building front-end
            applications while adhering to the best coding principles. She has
            experience utilizing HTML, CSS, and JavaScript to create responsive
            and accessible web pages. She has a strong understanding of data
            structures and algorithms and can solve problems quickly.
          </p>
        </div>
      </p>
    </div>
  );
};
export default About;
