import React from "react";
import "./style.css";

export default function Findr() {
  return (
    <div className="container project-container" id="findr">
      <div className="projectTitle">
        <h1>~Findr~</h1>
      </div>

      <div className="row firstRow">
        <img
          className="img-fluid project-img col-8"
          alt="Screenshot of findr app"
          src={require("../../public/findr_50.png")}
        />
        <div className="col-4">
          <div >
            <a
              href="https://github.com/commiewalker/Findr"
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
          <div >
            <a
              href="https://commiewalker.github.io/Findr/"
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
        FINDR is an application that simply and randomly displays an image from
        a restaurant in a card that can be cycled through until an appealing
        option is picked. Once the top choice is chosen, the restaurant
        information will be shown to get a user to their food as fast as
        possible.
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
