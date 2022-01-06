import React from "react";
import Form from "./Form";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import "./style.css";

const Contact = () => {
  return (
    <>
      <h1 className="contact">Contact Me</h1>
      <Form />
      <div className="icons">
        <a href="https://shalini47choudhary@gmail.com">
          <SiGmail color="white" size="30px" />
        </a>
        <a href="https://www.linkedin.com/in/shalini9ch/">
          <BsLinkedin color="blue" size="30px" />
        </a>
      </div>
    </>
  );
};
export default Contact;
