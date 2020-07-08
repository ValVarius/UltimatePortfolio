import React from "react";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";



import "./style.css";

export default function MobileHome() {
  return (
    <Zoom duration={1000}>
      <div className="card homecard mobilehome">
        <h5 className="card-title homeCardTitlemobile">~ About Me ~</h5>
        <hr />
        
        <div className="card-body">
        <Zoom duration={3000}>
        <div className="col-12 center">
        <img
          className="card-img-top"
          src={require("../../public/prof.jpg")}
          alt="valerio varani"
          id="profilePicture"
        />
        </div>
        </Zoom>
        <Rotate top right duration={5000} >
          <p className="card-text">
            Born in Italy but spent most of my adult life abroad, I made the U.S
            my home more than ten years ago.
          </p>
          <p className="card-text">
            I have a degree in literature and one in cinema studies. I have
            always had a curious mind which led me to a great variety of
            experiences.
          </p>
          <p className="card-text">
            I know multiple human and computer languages. I find myself most
            motivated by novelty and learning
          </p>
          <p className="card-text">I am a full-stack web developer!</p>
          </Rotate>
        </div>
      </div>
    </Zoom>
  );
}
