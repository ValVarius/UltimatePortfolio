import React from "react";
import "./style.css";

export default function MapleValley() {
  return (
    <div className="project-container" id="maple">
      <div className="back" id="mapleback"></div>
      <div className="projectTitle">~Maple Valley~</div>

      <img
        className="img-fluid project-img"
        alt="Screenshot of findr app"
        src={require("../../public/mapleValley_50.png")}
      />
      <div className="center">
        <div className="repolink">
          <a
            href="https://github.com/coleloui/MapleValley"
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
          An online registration system for volunteers and parents of campers
          from Girl Scouts Maple Valley Day Camp that will replace paper
          registration and facilitate camp planning by allowing registration
          details to be easily shared to camp planning committee.
        </div>

        <div className="repolink">
          <a
            href="https://protected-lowlands-08660.herokuapp.com/"
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
          src={require("../../public/handlebars-logo.png")}
          alt="Handlebars Logo"
        />

        <img
          className="img-fluid codes"
          src={require("../../public/node-logo-dark.png")}
          alt="Nodejs Logo"
        />
        <img
          className="img-fluid codes"
          src={require("../../public/sql-logo.png")}
          alt="SQL Logo"
        />
        <img
          className="img-fluid codes"
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
    </div>
  );
}
