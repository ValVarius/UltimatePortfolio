import React from "react";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import "./style.css"

export default function MobilePortfolio() {

  
  return (
    <div className="panel">
      
        {/* FIRST PROJECT  */}
        <div className="row projects" id="first">
          <div className="dropdown">
          <Slide left>
            <div className="dropButton" id="dropbtn1">
              <div className="dropdown-content">
                <a href="https://github.com/commiewalker/Findr">
                  GitHub Repository
                </a>
              </div>
            </div>
          </Slide>
          </div>
          <Slide right>
          <p id="firstTitle">FINDR</p>
          </Slide>
          <a href="https://commiewalker.github.io/Findr/" target="_blank" rel="noopener noreferrer">
          <Fade top>
            <img className = "img-fluid"  alt="Screenshot of findr app" src={require("../../public/findr.png")} />
          </Fade>
          </a>
        </div>
        {/* SECOND PROJECT */}
        <div className="row projects" id="second">
          <div className="dropdown">
          <Slide left>
            <div className="dropButton" id="dropbtn2">
              <div className="dropdown-content">
                <a href="https://github.com/ValVarius/weather-Chanel">
                  GitHub Repository
                </a>
              </div>
            </div>
            </Slide>
          </div>
          <Slide right>
          <p id="secondTitle">Weather App</p>
          </Slide>
          <a href="https://valvarius.github.io/weather-Chanel/" target="_blank" rel="noopener noreferrer">
          <Fade top>
            <img className = "img-fluid"  alt="Screenshot of weather app" src={require("../../public/weather.png")} />
          </Fade>
          </a>
        </div>
        {/* THIRD PROJECT */}
        <div className="row projects" id="third">
          <div className="dropdown">
          <Slide left>
            <div className="dropButton" id="dropbtn3">
              <div className="dropdown-content">
                <a href="https://github.com/ValVarius/Password-Generator">
                  GitHub Repository
                </a>
              </div>
            </div>
            </Slide>
          </div>
          <Slide right>
          <p id="thirdTitle">Password Generator</p>
          </Slide>

          <a
            href="https://valvarius.github.io/Password-Generator/"
            target="_blank" rel="noopener noreferrer"
          >
            <Fade top>
            <img className = "img-fluid"  alt="Screenshot of password app" src={require("../../public/passwordApp.png")} />
            </Fade>

          </a>
        </div>
      
     
      

   
          {/* FOURTH PROJECT */}
        <div className="row projects" id="fourth">
          <div className="dropdown">
          <Slide left>
            <div className="dropButton" id="dropbtn4">
              <div className="dropdown-content">
                <a href="https://github.com/coleloui/MapleValley">
                  GitHub Repository
                </a>
              </div>
            </div>
            </Slide>
          </div>
          <Slide right>
          <p id="fourthTitle">Maple Valley</p>
          </Slide>

          <a
            href="https://protected-lowlands-08660.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <Fade top>
              <img className = "img-fluid"  alt="Screenshot of mapleValley app" src={require("../../public/mapleValley.png")} />
              </Fade>

          </a>
        </div>
      

      
    </div>
  );
}