import React from "react";
import "./style.css";

export default function ContactBadge() {
  return (
    <div className="badge" id="contact">
      <div className="backcontact" id="contactback"></div>

      <div className="bottom" id="contactBottom">
        <a
          href="mailto:notitiami@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="card-img img-fluid logo"
            // src={require("../../public/emailicon.png")}
            src={require("../../public/mail-logo-4.png")}
            alt="mail Logo"
            id="maillogo"
          />
          notitiami@gmail.com
        </a>
        <a href="tel:+1-206-650-8647">
          <img
            className="card-img img-fluid logo"
            src={require("../../public/CirclePhone.png")}
            alt="phone Logo"
            id="phonelogo"
          />
          +1 206 650 8647
        </a>
        <a
          href="https://github.com/ValVarius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="card-img img-fluid logo"
            src={require("../../public/GitHub-Mark-120px-plus.png")}
            alt="GitHub Logo"
            id="logoGit"
          />
          ValVarius
        </a>
        <a
          href={require("../../public/resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="card-img img-fluid logo"
            src={require("../../public/resume-logo.png")}
            alt="resume Logo"
            id="cvlogo"
          />
          Résumé
        </a>
      </div>
    </div>
  );
}
