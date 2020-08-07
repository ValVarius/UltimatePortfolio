import React from "react";
import "./style.css";

export default function MapleValley() {
  return (
    <div className="container project-container" id="maplevalley">
      <div className=" projectTitle">
        <h1>~Maple Valley~</h1>
      </div>
      <div className="row firstRow">
        <img
          className="img-fluid project-img col-8"
          alt="Screenshot of Maple app"
          src={require("../../public/mapleValley_50.png")}
        />
        <div className="col-4">
          <div >
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
              <p className="gittext">Repository</p>
            </a>
          </div>
          {/* <div >
            <a
              href="https://github.com/commiewalker/Findr"
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
              href="https://protected-lowlands-08660.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="img-fluid logos"
                src={require("../../public/deployed-logo-white.png")}
                alt="Deployment Logo"
              />
              <p className="gittext">Deployment</p>
            </a>
          </div>
        </div>
      </div>
      
      <div className="info">
        On online registration system for volunteers and parents of campers of
        Girl Scouts Maple Valley Day Camp that will replace paper registration
        and facilitate camp planning by allowing registration details to be
        easily shared to camp planning committee.
      </div>
      
      <div className="row finale">
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
      </div>
      <div className="row finale">
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
      </div>
      
    </div>
  );
}
