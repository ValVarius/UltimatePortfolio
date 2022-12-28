import React from "react";
import "./style.css";

export default function NoteTaker() {
  return (
    <div className="project-container" id="notes">
      <div className="back" id="noteback"></div>
      <div className="projectTitle">~Note Taker~</div>

      <img
        className="img-fluid project-img"
        alt="Screenshot of findr app"
        src={require("../../public/NoteTaker_50.png")}
      />
      <div className="center">
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
            <p className="gittext">REPO</p>
          </a>
        </div>
        <div className="info">
          This project includes html files,test files, and javascript files for
          backend coding. It then connects the backend to front end to display
          the information. The purpose of this project is to allow user to add
          their Notes to the page.
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
            <p className="gittext">APP</p>
          </a>
        </div>
      </div>

      <div className="finale">
        <img
          className="img-fluid codes"
          src={require("../../public/js-html-css-logo.png")}
          alt="JS HTML CSS Logo"
        />

        <img
          className="img-fluid codes"
          src={require("../../public/node-logo-dark.png")}
          alt="Nodejs Logo"
        />
      </div>
    </div>
  );
}
