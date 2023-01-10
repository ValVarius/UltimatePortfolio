import React from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

import "./style.css";

export default function HomePage() {
  return (
    <Slide left duration={3000}>
    <div className="" id="profile">
      {/* <div className="back" id="profileback"></div> */}

      <img
        className="img-fluid"
        id="profilescreenshot"
        alt={"Screenshot of profile"}
        src={require("../../public/profile.jpg")}
      />
      <img
        className="img-fluid"
        id="mirror"
        alt={"mirror of profile"}
        src={require("../../public/profile.jpg")}
      />
        
        <div id="profiletext">
        <Slide up duration={1000}><p className="text" up duration={2000}>Creative and passionate</p></Slide>
          <Slide up duration={2000}><p className="text">Full Stack Software Engineer</p></Slide>
          <Slide up duration={3000}><p className="text">specializing in frontend development.</p></Slide>
          <Slide up duration={4000}><p className="text">
            More than three years experience with image analysis.
          </p></Slide>
          <Slide up duration={5000}><p className="text">
            A deep understanding of how the extraction or blend of meaningful
          </p></Slide>
          <Slide up duration={6000}><p className="text">
            information from images creates an experience for the viewer.
          </p></Slide>
          <Slide up duration={7000}><p className="text">
            A Degree in Literature and one in Cinema Studies make me an
          </p></Slide>
          <Slide up duration={8000}><p className="text">
            excellent communicator as well as a proficient interpreter of
            images.
          </p></Slide>
          <Slide up duration={9000}><p className="text">
            A graduate from the University of Washington full stack software
          </p></Slide>
          <Slide up duration={10000}><p className="text">
            development program. Fluid in multiple human and computer languages.
          </p></Slide>
          <Slide up duration={11000}><p className="text">
            Most motivated by novelty and learning. Originally from Rome,Italy,
          </p></Slide>
          <Slide up duration={12000}><p className="text">
            excited to bring a fresh perspective to a collaborative team
            environment.
          </p></Slide>
        </div>

    
    </div>
    </Slide>
  );
}
