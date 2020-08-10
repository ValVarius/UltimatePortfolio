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
          <div className = "row">
          <p className="logo" id="mail">
            <img
              className="card-img img-fluid logo"
              // src={require("../../public/emailicon.png")}
              src={require("../../public/mail-logo-4.png")}
              alt="mail Logo"
              id="maillogo"
            />
            &nbsp; notitiami@gmail.com
          </p>
          </div>
        </a>

        <a
          href={require("../../public/resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className = "row">
          <p id="cv" className="logo">
            <img
              className="card-img img-fluid logo"
              src={require("../../public/resume-logo.png")}
              alt="resume Logo"
              id="cvlogo"
            />
            &nbsp; &nbsp; Résumé
          </p>
          </div>
        </a>

        <a
          href="https://github.com/ValVarius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className = "row">
            <p id="gitName" className="logo">
              <img
                className="card-img img-fluid logo"
                src={require("../../public/GitHub-Mark-120px-plus.png")}
                alt="GitHub Logo"
                id="logoGit"
              />
              &nbsp;&nbsp; ValVarius
            </p>
          </div>
        </a>

        <a href="tel:+1-206-650-8647">
        <div className = "row">
          <p id="phone" className="logo">
            <img
              className="card-img img-fluid logo"
              src={require("../../public/CirclePhone.png")}
              alt="phone Logo"
              id="phonelogo"
            />
            &nbsp; +1 206 650 8647
          </p>
          </div>
        </a>

        <br />
      </div>
    </div>
  );
}
