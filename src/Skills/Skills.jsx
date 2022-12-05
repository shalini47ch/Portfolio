import React from "react";
import "./style.css";
import { DiJavascript, DiPython } from "react-icons/di";
import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiKeras,
  SiVisualstudiocode,
  SiSublimetext,
  SiBitbucket,
  SiPostman,
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { ImAccessibility } from "react-icons/im";
import { GrReactjs } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { RiGitlabFill } from "react-icons/ri";
import { FaHackerrank } from "react-icons/fa";

const leetcode = () => {
  window.location.href = "https://leetcode.com/shalini47choudhary/";
};

const gfg = () => {
  window.location.href =
    "https://auth.geeksforgeeks.org/user/shalinichoudhary/practice/";
};

const hackerrank = () => {
  window.location.href = "https://www.hackerrank.com/Shalini09";
};

const Skills = () => {
  return (
    <>
      <div>
        <div className="languages">
          <p>Languages</p>
          <div>
            <DiJavascript color="yellow" size="50px" />

            <DiPython color="blue" size="50px" />

            <SiCplusplus color="red" size="50px" />
          </div>
        </div>

        <div className="web-technolgies">
          <p>Web Technologies</p>
          <div className="icons2">
            <SiHtml5 color="orange" size="50px" />
            <SiCss3 color="yellow" size="50px" />
            <BsBootstrapFill color="purple" size="50px" />
            <ImAccessibility color="white" size="50px" />
          </div>
        </div>

        <div className="libraries">
          <p>Libraries and Framework</p>
          <div className="icons-3">
            <GrReactjs color="blue" size="50px" />
            <SiTensorflow color="orange" size="50px" />
            <SiKeras color="red" size="50px" />
          </div>
        </div>
        <div className="tools">
          <p>Tools</p>
          <div className="icons-4">
            <SiVisualstudiocode color="blue" size="50px" />
            <SiSublimetext color="orange" size="50px" />
            <AiOutlineGithub color="white" size="50px" />
            <RiGitlabFill color="orange" size="50px" />
            <SiBitbucket color="blue" size="50px" />
            <SiPostman color="orange" size="50px" />
          </div>
        </div>
      </div>
      <div className="problem-solving">
        <p>Check coding profiles</p>
        <div className="icons-5">
          <SiLeetcode color="orange" size="50px" onClick={leetcode} />
          <SiGeeksforgeeks color="green" size="50px" onClick={gfg} />
          <FaHackerrank color="green" size="50px" onClick={hackerrank} />
        </div>
      </div>
    </>
  );
};
export default Skills;
