import React from "react";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import "./style.css";

export default function HomeCard() {
  return (
    <Zoom duration={2000}>
      <div className="card homecard">
        <div className="card-body">
          {/*  first of two rows  */}


          {/* <div className="row"> */}

            {/*  SINGLE COLUMN  */}

            {/* <div className="col-12">
              <h5 className="card-title homeCardTitle">~ About Me ~</h5>
            </div>
          </div> */}

          {/* <hr /> */}

          {/* SECOND OF TWO ROWS */}
          <div className="row ">
            {/* FIRST OF TWO COLUMNS  */}
            <div className="col-4" id="profile">
              <Zoom duration={3000}>
                <img
                  className="img-fluid "
                  src={require("../../public/prof.jpg")}
                  alt="valerio varani"
                  id="profilePicture"
                />
              </Zoom>
            </div>
            {/* SECOND OF TWO COLUMNS  */}
            <Rotate top left cascade duration={3000}>
              <div className="col-8" id="myStory">
                <p className="card-text">
                  Creative and passionate Full Stack Software Engineer
                  specializing in frontend development.
                </p>
                <p className="card-text">
                  3+ years experience with image analysis and a deep
                  understanding of how the extraction or blend of meaningful
                  information from images creates an experience for the viewer.
                </p>
                <p className="card-text">
                  A Degree in Literature and one in Cinema Studies makes me an
                  excellent communicator as well as a proficient interpreter of
                  images.
                </p>
                <p className="card-text">
                  A graduate from the University of Washington full stack
                  software development program in 2020.
                </p>
                <p className="card-text">
                  Fluid in multiple human and computer languages. Most motivated
                  by novelty and learning.
                </p>
                <p className="card-text">
                  Originally from Rome,Italy, excited to bring a fresh
                  perspective to a collaborative team environment.
                </p>

              
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
