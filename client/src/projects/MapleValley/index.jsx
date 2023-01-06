import React from "react";
import "./style.css";

export default function MapleValley() {
  return (
    <div className="project-container" id="maple">
      <div className="back" id="mapleback"></div>
      <div className="projectTitle">~Maple Valley~</div>
  
      <img
        className="img-fluid project-img"
        id="maplescreenshot"
        alt="Screenshot of findr app"
        src={require("../../public/mapleValley_50.png")}
      />
      <div className="center" id="maplecenter">
        <div className="info" id="mapletext">
        An online registration system for volunteers and parents of campers
            from Girl Scouts Maple Valley Day Camp that will replace paper
            registration and facilitate camp planning by allowing registration
            details to be easily shared to camp planning committee.
        </div>
      </div>
  
      <div className="finale" id="maplefinale">
      <img
            className="img-fluid codes longcodes"
            src={require("../../public/js-html-css-logo.png")}
            alt="JS HTML CSS Logo"
          />
          <img
            className="img-fluid codes"
            src={require("../../public/handlebars-logo.png")}
            alt="Handlebars Logo"
          />
  
          <img
            className="img-fluid codes longcodes"
            src={require("../../public/node-logo-dark.png")}
            alt="Nodejs Logo"
          />
          <img
            className="img-fluid codes longcodes"
            src={require("../../public/sql-logo.png")}
            alt="SQL Logo"
          />
          <img
            className="img-fluid codes longcodes"
            src={require("../../public/sequelize-logo.png")}
            alt="Sequelize Logo"
          />
          <img
            className="img-fluid codes"
            src={require("../../public/mysql-logo.png")}
            alt="MySql Logo"
          />
          <img
            className="img-fluid codes"
            src={require("../../public/nodemailer-logo.png")}
            alt="Nodemailer Logo"
          />
      </div>
      <div id="maplelinks">
        <div className="repolink">
          <a
            href="https://github.com/ValVarius/MapleValley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid logos "
              src={require("../../public/git-white.png")}
              alt="GitHub Logo"
            />
            <p className="gittext maplegittext">REPO</p>
          </a>
        </div>
        <div className="repolink">
          <a
            href="https://maplevalley.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid logos"
              src={require("../../public/deployed-logo-white.png")}
              alt="BackEnd Logo"
            />
            <p className="gittext maplegittext">&nbsp;APP&nbsp;  </p>
          </a>
        </div>
      </div>
    </div>
  );
}
