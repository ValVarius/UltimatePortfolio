import React from "react";
import "./style.css";

export default function Weather() {
  return (
    <div className="project-container" id="weather">
      <div className="back" id="weatherback"></div>
      <div className="projectTitle">~Weather App~</div>
  
      <img
        className="img-fluid project-img"
        id="weatherscreenshot"
        alt="Screenshot of weather app"
        src={require("../../public/weather.png")}
      />
      <div className="center" id="weathercenter">
        <div className="info" id="weathertext">
          This project will get user's input of the city and then display the
          current weather as well as the 5 day forecast for that city.{" "}
        </div>
      </div>
  
      <div className="finale" id="weatherfinale">
        <img
          className="img-fluid codes longcodes"
          src={require("../../public/js-html-css-logo.png")}
          alt="JS HTML CSS Logo"
        />
        <img
          className="img-fluid codes longcodes"
          src={require("../../public/jquery-logo-dark-full.png")}
          alt="JQUERY Logo"
        />
  
      </div>
      <div id="weatherlinks">
        <div className="repolink">
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
            <p className="gittext weathergittext">REPO</p>
          </a>
        </div>
        <div className="repolink">
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
            <p className="gittext weathergittext">&nbsp;APP&nbsp; </p>
          </a>
        </div>
      </div>
    </div>
  );
}

