import React from "react";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';


import "./style.css";

export default function MobileHome() {
  return (
    <Zoom>
      <div className="card homecard mobilehome">
        <div className="card-body">
          <Zoom duration={2000}>
            <div className="col-12 center">
              <img
                className="card-img-top"
                src={require("../../public/prof.jpg")}
                alt="valerio varani"
                id="profilePicture"
              />
            </div>
          </Zoom>
          <Zoom duration={2000}>
            <p className="card-text">
              Creative and passionate Full Stack Software Engineer specializing
              in frontend development.
            </p>
            <p className="card-text">
              3+ years experience with image analysis and a deep understanding
              of how the extraction or blend of meaningful information from
              images creates an experience for the viewer.
            </p>
            <p className="card-text">
              A Degree in Literature and one in Cinema Studies makes me an
              excellent communicator as well as a proficient interpreter of
              images.
            </p>
            <p className="card-text">
              A graduate from the University of Washington full stack software
              development program in 2020.
            </p>
            <p className="card-text">
              Fluid in multiple human and computer languages. Most motivated by
              novelty and learning
            </p>
            <p className="card-text">
              Originally from Rome,Italy, excited to bring a fresh perspective
              to a collaborative team environment.
            </p>{" "}
          </Zoom>

          <hr />
          <div className="row">
            <img
              className="img-fluid skills"
              src={require("../../public/js-html-css-logo.png")}
              alt="JS HTML CSS Logo"
            />
            <img
              className="img-fluid skills"
              src={require("../../public/node-logo-dark-2.png")}
              alt="Nodejs Logo"
            />
            <img
              className="img-fluid codes"
              src={require("../../public/jquery-logo-dark-full.png")}
              alt="JQUERY Logo"
            />
            <img
              className="img-fluid skills skillexc"
              src={require("../../public/express-logo.png")}
              alt="Express Logo"
            />
            <img
              className="img-fluid skills skillexc"
              src={require("../../public/ajax-logo.png")}
              alt="Ajax Logo"
            />
            <img
              className="img-fluid skills skillexc"
              src={require("../../public/restfulapi-logo.png")}
              alt="RestFul Api Logo"
            />
            <img
              className="img-fluid skills"
              src={require("../../public/react-logo.png")}
              alt="React Logo"
            />
            <img
              className="img-fluid skills"
              src={require("../../public/handlebars-logo.png")}
              alt="Handlebars Logo"
            />
          </div>
          <hr /> {/*Second Row*/}
          <div className="row">
          <img
              className="img-fluid skills"
              src={require("../../public/java-logo.png")}
              alt="Java Logo"
            />
            <img
              className="img-fluid skills"
              src={require("../../public/sql-logo.png")}
              alt="SQL Logo"
            />
            <img
              className="img-fluid skills"
              src={require("../../public/sequelize-logo.png")}
              alt="Sequelize Logo"
            />
            <img
              className="img-fluid skills"
              src={require("../../public/mysql-logo.png")}
              alt="MySql Logo"
            />
            <img
              className="img-fluid skills"
              src={require("../../public/mongo-logo.png")}
              alt="Mongo Logo"
            />
            <img
              className="img-fluid skills"
              src={require("../../public/mongoose-logo.png")}
              alt="Mongoose Logo"
            />
            <img
              className="img-fluid skills"
              src={require("../../public/nodemailer-logo.png")}
              alt="Nodemailer Logo"
            />
          </div>
          <hr />
          {/* THIRD ROW */}
          <div className="row">
            <img
              className="img-fluid skills"
              src={require("../../public/bootstrap-logo.png")}
              alt="Bootstrap Logo"
            />
            <img
              className="img-fluid skills bulma"
              src={require("../../public/bulma-seeklogo.com.svg")}
              alt="Bulma Logo"
            />
            <img
              className="img-fluid skills bulma"
              src={require("../../public/bulma-logo-name.png")}
              alt="Bulma Text"
            />
            <img
              className="img-fluid skills skillexc"
              src={require("../../public/material-logo.svg")}
              alt="Material Text"
            />
            <img
              className="img-fluid skills skillexc"
              src={require("../../public/heroku-logo.png")}
              alt="Heroku Logo"
            />
            <img
              className="img-fluid skills skillexc"
              src={require("../../public/git-logo.png")}
              alt="Git Logo"
            />
            <img
              className="img-fluid skills skillexc"
              src={require("../../public/bash-logo.png")}
              alt="Git-Bash Logo"
            />
            <img
              className="img-fluid skills skillexc"
              src={require("../../public/GitHub-Mark-120px-plus.png")}
              alt="GitHub Logo"
            />
            <img
              className="img-fluid skills skillexc"
              src={require("../../public/gitlab-logo.png")}
              alt="GitLab Logo"
            />
          </div>
        </div>
      </div>
    </Zoom>
  );
}
