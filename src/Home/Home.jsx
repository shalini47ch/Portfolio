/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaMedium, FaDev } from "react-icons/fa";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="static-txt">I'm a</div>
        <ul className="dynamic-txts">
          <li>
            <span>Software Engineer</span>
          </li>
          <li>
            <span>Frontend Developer</span>
          </li>
          <li>
            <span>Curious Learner</span>
          </li>
          <li>
            <span>Technical Blogger</span>
          </li>
        </ul>
      </div>
      <p>
        A learner by heart and Software Engineer by Profession.Looking forward
        for an exciting role.
      </p>
      <div className="icons">
        <a href="https://github.com/shalini47ch"><BsGithub color="white" size="30px" /></a>
        <a href="https://www.linkedin.com/in/shalini9ch/"><BsLinkedin color="blue" size="30px" /></a>
        <a href="https://medium.com/@shalini47choudhary"><FaMedium color="white" size="30px"/></a>
        <a href=""><FaDev color="white" size="30px"/></a>
      </div>
      <div className="hire-me">
      <button>Hire Me</button>
      <button>Resume</button>
      </div>
    </>
  );
};
export default Home;
