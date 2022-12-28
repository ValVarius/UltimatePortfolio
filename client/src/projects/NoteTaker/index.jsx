import React from "react";
import "./style.css";

export default function NoteTaker() {
  return (
    <div className="project-container" id="note">
      <div className="back" id="noteback"></div>
      <div className="projectTitle">~Note Taker~</div>

      <img
        className="img-fluid project-img"
        id="notescreenshot"
        alt="Screenshot of note app"
        src={require("../../public/NoteTaker_50.png")}
      />
      <div className="center" id="notecenter">
        <div className="info" id="notetext">
          This project includes html files,test files, and javascript files for
          backend coding. It then connects the backend to front end to display
          the information. The purpose of this project is to allow user to add
          their Notes to the page.
        </div>
      </div>

      <div className="finale" id="notefinale">
        <img
          className="img-fluid codes longcodes"
          src={require("../../public/js-html-css-logo.png")}
          alt="JS HTML CSS Logo"
        />

        <img
          className="img-fluid codes longcodes"
          src={require("../../public/node-logo-dark.png")}
          alt="Nodejs Logo"
        />
      </div>
      <div id="notelinks">
        <div className="repolink">
          <a
            href="https://github.com/ValVarius/Note-Taking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid logos "
              src={require("../../public/git-white.png")}
              alt="GitHub Logo"
            />
            <p className="gittext notegittext">REPO</p>
          </a>
        </div>
        <div className="repolink">
          <a
            href="https://notaking.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid logos"
              src={require("../../public/deployed-logo-white.png")}
              alt="BackEnd Logo"
            />
            <p className="gittext notegittext">&nbsp;APP&nbsp; </p>
          </a>
        </div>
      </div>
    </div>
  );
}
