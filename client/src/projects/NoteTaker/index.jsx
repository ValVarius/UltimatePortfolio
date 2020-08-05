import React from "react";
import "./style.css";

export default function NoteTaker() {
  return (
    <div className="container project-container" id="notes">
      <div className=" projectTitle">
        <h1>~Note Takes~</h1>
      </div>

      <div className="project-img">
        <a
          href="https://notaking.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Fade bottom duration={2000}> */}
          <img
            className="img-fluid"
            alt="Screenshot of findr app"
            src={require("../../public/NoteTaker_50.png")}
          />
          {/* </Fade> */}
        </a>
      </div>
      <div className="info">
        This project includes html files,test files and javascript files for
        backend coding. It then connects the backend to front end to display the
        information. The purpose of this project is to allow user to add their
        Notes to the page.
      </div>
      <img
                className="img-fluid logit"
                src={require("../../public/git-white.png")}
                alt="GitHub Logo"
                
              />
    </div>
  );
}
