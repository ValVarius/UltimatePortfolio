import React from "react";
import "./style.css";

export default function MapleValley() {
  return (
    <div className="container project-container" id="maplevalley">
      <div className=" projectTitle">
        <h1>~Maple Valley~</h1>
      </div>
      <div className="project-img">
        <a
          href="https://protected-lowlands-08660.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Fade bottom duration={2000}> */}
          <img
            className="img-fluid"
            alt="Screenshot of mapleValley app"
            src={require("../../public/mapleValley_50.png")}
          />
          {/* </Fade> */}
        </a>
      </div>
      <div className="info">
        On online registration system for volunteers and parents of campers of
        Girl Scouts Maple Valley Day Camp that will replace paper registration
        and facilitate camp planning by allowing registration details to be
        easily shared to camp planning committee.
      </div>
      
      <div className="row finale">
        <a
          href="https://github.com/coleloui/MapleValley"
          target="_blank"
          rel="noopener noreferrer"
          // class = "col"
        >
          <img
            className="img-fluid logit"
            src={require("../../public/git-white.png")}
            alt="GitHub Logo"
          />
          <p className="gittext">Repository</p>
        </a>

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
          src={require("../../public/sql-logo.png")}
          alt="SQL Logo"
        />
        <img
          className="img-fluid codes"
          src={require("../../public/node-logo.png")}
          alt="Nodejs Logo"
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


      </div>
      
    </div>
  );
}
