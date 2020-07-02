import React from "react";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import "./style.css";

export default function HomeCard() {
  return (
    <div className="card homecard">
      <div className="card-body">
        {/*  first of two rows  */}
        <div className="row">
          {/*  SINGLE COLUMN  */}
          <div className="col-12">
            <h5 className="card-title homeCardTitle">~ About Me ~</h5>
          </div>
        </div>

        <hr />

        {/* SECOND OF TWO ROWS */}
        <div className="row ">
          {/* FIRST OF TWO COLUMNS  */}
          <div className="col-4" id="profile">
            <Zoom left>
              <img
                className="img-fluid "
                src={require("../../public/prof.jpg")}
                alt="valerio varani"
                id="profilePicture"
              />
            </Zoom>
          </div>
          {/* SECOND OF TWO COLUMNS  */}
          <Rotate top right cascade>
            <div className="col-8" id="myStory">
              <p className="card-text">Hello! </p>
              <p className="card-text">
                Born in Italy but spent most of my adult life abroad, I made the
                U.S my home more than ten years ago.
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
              <p className="card-text">
                Currently, I am a full-stack developer in the making!
              </p>
            </div>
          </Rotate>
        </div>
      </div>
    </div>
  );
}
