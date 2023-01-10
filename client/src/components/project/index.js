import React from "react";
import "./style.css";
import "./sensapp.css";
import "./tutor.css"
import "./maple.css"
import "./findr.css"
import "./note.css"
import "./weather.css"
import "./password.css"

export default function Project(props) {
  return (
    <div className="project-container" id={props.id + ""}>
      <div className="back" id={props.id + "back"}></div>

      <img
        className="img-fluid project-img"
        id={props.id + "screenshot"}
        alt={"Screenshot of" + props.id + "app"}
        src={props.screenshotlink}
      />
      <div className="center" id={props.id + "center"}>
        <div className="links" id={props.id + "links"}>
          <div className="repolink">
            <a href={props.repolink} target="_blank" rel="noopener noreferrer">
              <img
                className="img-fluid logos "
                src={require("../../public/git-white.png")}
                alt="GitHub Logo"
              />
              <p className="gittext sensappgittext">REPO</p>
            </a>
          </div>
          <div className="projectTitle" id={props.id + "title"}>
            {props.title}
          </div>

          <div className="repolink">
            <a href={props.applink} target="_blank" rel="noopener noreferrer">
              <img
                className="img-fluid logos"
                src={require("../../public/deployed-logo-white.png")}
                alt="BackEnd Logo"
              />
              <p className="gittext sensappgittext">&nbsp;APP&nbsp; </p>
            </a>
          </div>
        </div>
        <div className="info" id={props.id + "text"}>
          {props.text}
        </div>
      </div>

      <div className="finale" id={props.id + "finale"}>
        {props.logos.map((item) => (
          <img
            className="img-fluid codes"
            id={item}
            src={require("../../public/" + item + ".png")}
            alt={item + "Logo"}
            key={item}
          />
        ))}
      </div>
    </div>
  );
}
