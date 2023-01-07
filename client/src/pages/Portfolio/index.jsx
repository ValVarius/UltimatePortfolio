import React from "react";
import Slide from "react-reveal/Slide";
import "./style.css";

// import Fade from "react-reveal/Fade";
// import Pulse from "react-reveal/Pulse";
import SensApp from "../../projects/SensApp";
import YouTutor from "../../projects/YouTutor";
import Findr from "../../projects/Findr";
import MapleValley from "../../projects/MapleValley";
import NoteTaker from "../../projects/NoteTaker";
import Password from "../../projects/Password";
import Weather from "../../projects/Weather";

export default function Portfolio() {
  console.log("sTocazzo");
  console.log(window.innerWidth);
  if (window.innerWidth > 500) {
    return (
      <div className="portfolioCard">
        <Slide className="projectcontainer" up duration={2000}>
          <SensApp />
        </Slide>
        <Slide className="projectcontainer" up duration={2000}>
          <YouTutor />
        </Slide>
        <Slide className="projectcontainer" up duration={2000}>
          <MapleValley />
        </Slide>
        <Slide className="projectcontainer" up duration={2000}>
          <Findr />
        </Slide>
        <Slide className="projectcontainer" up duration={2000}>
          <NoteTaker />
        </Slide>
        <Slide className="projectcontainer" up duration={2000}>
          <Weather />
        </Slide>
        <Slide className="projectcontainer" up duration={2000}>
          <Password />
        </Slide>
      </div>
    );
  } else {
    return (
      <div className="portfolioCard">
        <Slide className="projectcontainer" left duration={2000}>
          <SensApp />
        </Slide>
        <Slide className="projectcontainer" left duration={2000}>
          <YouTutor />
        </Slide>
        <Slide className="projectcontainer" left duration={2000}>
          <MapleValley />
        </Slide>
        <Slide className="projectcontainer" left duration={2000}>
          <Findr />
        </Slide>
        <Slide className="projectcontainer" left duration={2000}>
          <NoteTaker />
        </Slide>
        <Slide className="projectcontainer" left duration={2000}>
          <Weather />
        </Slide>
        <Slide className="projectcontainer" left duration={2000}>
          <Password />
        </Slide>
      </div>
    );
  }
}
