/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          <span>Shalini.dev</span>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to ="/experience">Experience</Link>
            </li>
            <li>
              <Link to ="/skills">Skills</Link>
            </li>
            
            <li>
              <Link to ="/projects">Projects</Link>
            </li>
            <li>
              <Link to ="/research">Research</Link>
            </li>
            <li>
              <Link to ="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
