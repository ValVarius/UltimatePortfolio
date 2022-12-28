import React from "react";
import "./style.css";

export default function Password() {
  return (
    <div className="project-container" id="password">
      <div className="back" id="passwordback"></div>
      <div className="projectTitle">~Password~</div>

      <img
        className="img-fluid project-img"
        id="passwordscreenshot"
        alt="Screenshot of password app"
        src={require("../../public/passwordApp.png")}
      />
      <div className="center" id="passwordcenter">
        <div className="info" id="passwordtext">
          A simple password generator which allows the user to decide the type
          of characters and the length of the password.
        </div>
      </div>

      <div className="finale" id="passwordfinale">
        <img
          className="img-fluid codes longcodes"
          src={require("../../public/js-html-css-logo.png")}
          alt="JS HTML CSS Logo"
        />
      </div>
      <div id="passwordlinks">
        <div className="repolink">
          <a
            href="https://github.com/ValVarius/Password-Generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid logos "
              src={require("../../public/git-white.png")}
              alt="GitHub Logo"
            />
            <p className="gittext passwordgittext">REPO</p>
          </a>
        </div>
        <div className="repolink">
          <a
            href="https://valvarius.github.io/Password-Generator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid logos"
              src={require("../../public/deployed-logo-white.png")}
              alt="BackEnd Logo"
            />
            <p className="gittext passwordgittext">&nbsp;APP&nbsp; </p>
          </a>
        </div>
      </div>
    </div>
  );
}
