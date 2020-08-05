import React from "react";
import "./style.css";

export default function Weather() {
  return (
    <div className="container project-container" id="weather">
      <div class=" projectTitle">
        <h1>~Weather App~</h1>
      </div>

      <div className="project-img">
        <a
          href="https://valvarius.github.io/weather-Chanel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Fade bottom duration={2000}> */}
          <img
            className="img-fluid"
            alt="Screenshot of weather app"
            src={require("../../public/weather.png")}
          />
          {/* </Fade> */}
        </a>
      </div>
      <div className="info">
        This project will get user's input of the city and then display the
        current weather as well as the 5 day forecast for that city.{" "}
      </div>
      <img
                className="img-fluid logit"
                src={require("../../public/git-white.png")}
                alt="GitHub Logo"
                
              />
    </div>
  );
}
