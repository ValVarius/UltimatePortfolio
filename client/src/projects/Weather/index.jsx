import React from "react";
import "./style.css";

export default function Weather() {
  return (
    <div className="container project-container" id="weather">
      <div className=" projectTitle">
        <h1>~Weather App~</h1>
      </div>

      <div className="row firstRow">
        <img
          className="img-fluid project-img col-8"
          alt="Screenshot of Weather app"
          src={require("../../public/weather.png")}
        />
        <div className="col-4">
          <div>
            <a
              href="https://github.com/ValVarius/weather-Chanel"
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
              href="https://valvarius.github.io/weather-Chanel/"
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
        This project will get user's input of the city and then display the
        current weather as well as the 5 day forecast for that city.{" "}
      </div>
      <div className="row finale">
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
      </div>
    </div>
  );
}
