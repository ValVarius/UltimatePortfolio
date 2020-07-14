import React from "react";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";



import "./style.css";

export default function MobileHome() {
  return (
    <Zoom duration={1000}>
      <div className="card homecard mobilehome">
        {/* <h5 className="card-title homeCardTitlemobile">~ About Me ~</h5>
        <hr /> */}
        
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
        <Rotate top left duration={5000} >
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
                  by novelty and learning
                </p>
                <p className="card-text">
                  Originally from Rome,Italy, excited to bring a fresh
                  perspective to a collaborative team environment.
                </p>          </Rotate>
        </div>
      </div>
    </Zoom>
  );
}

