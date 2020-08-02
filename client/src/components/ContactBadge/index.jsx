import React from "react";
import "./style.css";

export default function ContactBadge() {
  return (
    <div className="container badge" id="general">
      <div className="top">
        <div className="dot" id="gitDot"></div>
      </div>
      <div className="bottom" id="gitBottom">
        <br />
        <br />
        <br />
        <br />
        


        <a
          href="mailto:notitiami@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p  id="mail">
            <img
              className="card-img img-fluid logo"
              // src={require("../../public/emailicon.png")}
              src={require("../../public/maillogo.png")}
              alt="mail Logo"
              id="maillogo"
            />
            &nbsp; notitiami@gmail.com
          </p>
        </a>

        <a
          className="space"
          href={require("../../public/resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p id="cv">
            <img
              className="card-img img-fluid logo"
              src={require("../../public/resume-logo.png")}
              alt="resume Logo"
              id="cvlogo"
            />
            &nbsp; &nbsp; Résumé
          </p>
        </a>

        <a
          className="space"
          href="https://github.com/ValVarius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <p id="gitName">
              <img
                className="card-img img-fluid logo"
                src={require("../../public/GitHub-Mark-120px-plus.png")}
                alt="GitHub Logo"
                id="logoGit"
              />
              {/* <img
                className="card-img img-fluid logo"
                src={require("../../public/GitHub_Logo.png")}
                alt="GitHub Logo"
                id="logoGit2"
              /> */}
              &nbsp;&nbsp;  ValVarius
            </p>
          </div>
        </a>

        

        <a className="space" href="tel:+1-206-650-8647">
          <p id="phone">
            <img
              className="card-img img-fluid logo"
              src={require("../../public/CirclePhone.png")}
              alt="phone Logo"
              id="phonelogo"
            />
            &nbsp; +1 206 650 8647
          </p>
        </a>

        
        <br />
      </div>
    </div>
  );
}



