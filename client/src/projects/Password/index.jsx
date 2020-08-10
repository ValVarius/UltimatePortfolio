import React from "react";
import "./style.css";

export default function Password() {
  return (
    <div className="container project-container" id="password">
      <div className="projectTitle">
        <h1>~Password~</h1>
      </div>

      {/* ********************************************** */}
      <div className="row firstRow">
        <img
          className="img-fluid project-img col-8"
          alt="Screenshot of password app"
          src={require("../../public/passwordApp.png")}
        />
        <div className="col-4">
          <div>
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
              <p className="gittext">Repository</p>
            </a>
          </div>
          {/* <div >
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="img-fluid logos"
                src={require("../../public/back-end-white.png")}
                alt="BackEnd Logo"
              />
              <p className="gittext">Back End Repository</p>
            </a>
          </div> */}
          <div>
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
              <p className="gittext">Deployment</p>
            </a>
          </div>
        </div>
      </div>
      {/* ********************************************* */}
      <div className="info">
        A simple generator which allows the user to decide the type of
        characters and the length of the password.
      </div>

      <div className="row finale">
        <img
          className="img-fluid codes"
          src={require("../../public/js-html-css-logo.png")}
          alt="JS HTML CSS Logo"
        />
      </div>
    </div>
  );
}
