import React from "react";
import "./style.css";

export default function NoteTaker() {
  return (
    <div className="container project-container" id="notes">
      <div className=" projectTitle">
        <h1>~Note Taker~</h1>
      </div>

      
      <div className="row firstRow">
        <img
          className="img-fluid project-img col-8"
          alt="Screenshot of Note Taker app"
          src={require("../../public/NoteTaker_50.png")}
        />
        <div className="col-4">
          <div>
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
              href="https://notaking.herokuapp.com/"
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

      
      <div className="info">
        This project includes html files,test files and javascript files for
        backend coding. It then connects the backend to front end to display the
        information. The purpose of this project is to allow user to add their
        Notes to the page.
      </div>
      <div className="row finale">
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
