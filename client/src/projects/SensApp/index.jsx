import React from "react";
import "./style.css";

export default function SensApp() {
  return (
    <div className="project-container" id="sensapp">
      <div className="back" id="sensappback"></div>

      <img
        className="img-fluid project-img"
        id="sensappscreenshot"
        alt="Screenshot of findr app"
        src={require("../../public/sensapp.gif")}
      />
      <div className="center" id="sensappcenter">
        <div className="links" id="sensapplinks">
          <div className="repolink">
            <a
              href="https://github.com/ValVarius/SenseAppReact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="img-fluid logos "
                src={require("../../public/git-white.png")}
                alt="GitHub Logo"
              />
              <p className="gittext sensappgittext">REPO</p>
            </a>
          </div>
          <div className="projectTitle" id="sensapptitle">
            SensApp
          </div>

          <div className="repolink">
            <a
              href="https://sensapp.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="img-fluid logos"
                src={require("../../public/deployed-logo-white.png")}
                alt="BackEnd Logo"
              />
              <p className="gittext sensappgittext">&nbsp;APP&nbsp; </p>
            </a>
          </div>
        </div>
        <div className="info" id="sensapptext">
          A MERN project that assists in tracking the body reactions to food.
          This app is an improvement from the current paper forms in that it
          allows the storing and retrieval of every meal by date. I also
          provides the user with charts representing the occurrences of symptoms
          in associations with the respective food items. Sensitivity-App is: in
          progress, as there are more features that be added.
        </div>
      </div>

      <div className="finale" id="sensappfinale">
        <img
          className="img-fluid codes longcodes"
          id="mernlogo"
          src={require("../../public/mern.png")}
          alt="Mern Logo"
        />
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
          src={require("../../public/mongo-logo.png")}
          alt="MongoDB Logo"
        />
        <img
          className="img-fluid codes longcodes"
          src={require("../../public/mongoose-logo.png")}
          alt="mongoose Logo"
        />
        <img
          className="img-fluid codes"
          src={require("../../public/bootstrap-logo.png")}
          alt="bootstrap Logo"
        />
      </div>
    </div>
  );
}
