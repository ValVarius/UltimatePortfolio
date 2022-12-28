import React from "react";
import "./style.css";

export default function Findr() {
  return (
    <div className="project-container" id="findr">
      <div className="back" id="findrback"></div>
      <div className="projectTitle">~Findr~</div>
  
      <img
        className="img-fluid project-img"
        alt="Screenshot of findr app"
        src={require("../../public/findr_50.png")}
      />
      <div className="center">
        <div className="repolink">
          <a
            href="https://github.com/ValVarius/FINDR"
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
          FINDR is an application that simply and randomly displays an image from
          a restaurant in a card that can be cycled through until an appealing
          option is picked. Once the top choice is chosen, the restaurant
          information will be shown to get a user to their food as fast as
          possible.
        </div>
  
        <div className="repolink">
          <a
            href="https://valvarius.github.io/FINDR/"
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
            src={require("../../public/jquery-logo-dark-full.png")}
            alt="JQUERY Logo"
          />
          <img
            className="img-fluid codes"
            src={require("../../public/ajax-logo.png")}
            alt="Ajax Logo"
          />
        
      </div>
    </div>
  );
}


