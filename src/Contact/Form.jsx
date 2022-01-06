import React from "react";
import emailjs from "emailjs-com";
import "./style.css";

const Form = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vibcfqj",
        "template_36rhwwf",
        e.target,
        "user_k2kgxlU6FlhigRZOms5ET"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={sendEmail} className="details">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
export default Form;
