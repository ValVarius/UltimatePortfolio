import React from "react";
import Zoom from "react-reveal/Zoom";
import "./style.css";

export default function HomePage() {
  return (
    <Zoom delay={300} duration={1500}>
      <div className="card homecard">
        

        <div id="myStory">
          <p className="card-text" >
            Creative and passionate
          </p>
          <p className="card-text">Full Stack Software Engineer</p>
          <p className="card-text">specializing in frontend development.</p>
          <p className="card-text">3+ years experience with image analysis</p>
          <p className="card-text">
            and a deep understanding of how the extraction or blend
          </p>
          <p className="card-text">
            of meaningful information from images creates an experience for the
          </p>
          <p className="card-text">
            viewer. A Degree in Literature and one in Cinema Studies make me an
          </p>
          <p className="card-text">
            excellent communicator as well as a proficient interpreter of
            images.
          </p>
          <p className="card-text">
            A graduate from the University of Washington full stack software
          </p>
          <p className="card-text">
            development program. Fluid in multiple human and computer languages.
          </p>
          <p className="card-text">
            Most motivated by novelty and learning. Originally from Rome,Italy,
          </p>
          <p className="card-text">
            excited to bring a fresh perspective to a collaborative team
            environment.
          </p>
        </div>

        <Zoom delay={300} duration={2500}>
          <img
            className="img-fluid "
            src={require("../../public/prof.jpg")}
            alt="valerio varani"
            id="profilePicture"
          />
        </Zoom>

        <div id="skillscontainer">
          <img
            className="img-fluid skills"
            src={require("../../public/js-html-css-logo.png")}
            alt="JS HTML CSS Logo"
          />
          <img
            className="img-fluid skills"
            src={require("../../public/node-logo-dark.png")}
            alt="Nodejs Logo"
          />
          <img
            className="img-fluid skills"
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

          <img
            className="img-fluid skills"
            src={require("../../public/bootstrap-logo.png")}
            alt="Bootstrap Logo"
          />
          <img
            className="img-fluid skills bulmalogo"
            src={require("../../public/bulma-seeklogo.com.svg")}
            alt="Bulma Logo"
          />
          <img
            className="img-fluid skills bulmatext"
            src={require("../../public/bulma-logo-name.png")}
            alt="Bulma Text"
          />
          <img
            className="img-fluid skills"
            src={require("../../public/material-logo.svg")}
            alt="Material Text"
          />
          <img
            className="img-fluid skills"
            src={require("../../public/heroku-logo.png")}
            alt="Heroku Logo"
          />
          <img
            className="img-fluid skills"
            src={require("../../public/git-logo.png")}
            alt="Git Logo"
          />
          <img
            className="img-fluid skills"
            src={require("../../public/bash-logo.png")}
            alt="Git-Bash Logo"
          />
          <img
            className="img-fluid skills"
            src={require("../../public/GitHub-Mark-120px-plus.png")}
            alt="GitHub Logo"
          />
          <img
            className="img-fluid skills"
            src={require("../../public/gitlab-logo.png")}
            alt="GitLab Logo"
          />
        </div>
      </div>
    </Zoom>
  );
}
