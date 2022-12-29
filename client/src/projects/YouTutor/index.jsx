import React from "react";
import "./style.css";

export default function YouTutor() {
  return (
    <div className="project-container" id="tutor">
      <div className="back" id="tutorback"></div>
      <div className="projectTitle">~YouTutor~</div>

      <img
        className="img-fluid project-img"
        id="tutorscreenshot"
        alt="Screenshot of findr app"
        src={require("../../public/YouTutor.png")}
      />
      <div className="center" id="tutorcenter">
        <div className="info" id="tutortext">
          This application is a student aid intented to enhance the learning
          experience by providing a platform where students can both seek help
          on a subject they have not mastered yet and offer help on those
          subjects on which they are confident. It is also deployed on its own
          domain.
        </div>
      </div>

      <div className="finale" id="tutorfinale">
        {/* <img
          className="img-fluid codes"
          src={require("../../public/react-logo-white.png")}
          alt="Black React Logo"
        /> */}
        <img
          className="img-fluid codes longcodes"
          src={require("../../public/js-html-css-logo.png")}
          alt="JS HTML CSS Logo"
        />
        <img
          className="img-fluid codes"
          src={require("../../public/react-logo.png")}
          alt="White React Logo"
        />
        <img
          className="img-fluid codes longcodes"
          src={require("../../public/express-logo.png")}
          alt="Express Logo"
        />
        <img
          className="img-fluid codes longcodes"
          src={require("../../public/sequelize-logo.png")}
          alt="Sequelize Logo"
        />
        <img
          className="img-fluid codes"
          src={require("../../public/sql-logo.png")}
          alt="SQL Logo"
        />
        <img
          className="img-fluid codes"
          src={require("../../public/mysql-logo.png")}
          alt="MySql Logo"
        />
        <img
          className="img-fluid codes"
          src={require("../../public/bulma-seeklogo.com.svg")}
          alt="BulmaSeek Logo"
        />
        <img
          className="img-fluid codes longcodes"
          src={require("../../public/bulma-logo-name.png")}
          alt="Bulma Logo"
        />
      </div>
      <div id="tutorlinks">
        <div className="repolink">
          <a
            href="https://github.com/ValVarius/YouTutor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid logos "
              src={require("../../public/git-white.png")}
              alt="GitHub Logo"
            />
            <p className="gittext tutorgittext">REPO</p>
          </a>
        </div>
        <div className="repolink">
          <a
            href="https://you-tutor.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid logos"
              src={require("../../public/deployed-logo-white.png")}
              alt="BackEnd Logo"
            />
            <p className="gittext tutorgittext">&nbsp;APP&nbsp; </p>
          </a>
        </div>
      </div>
    </div>
  );
}
