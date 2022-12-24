import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";
import Findr from "../../projects/Findr";
import YouTutor from "../../projects/YouTutor";
import MapleValley from "../../projects/MapleValley";
import NoteTaker from "../../projects/NoteTaker";
import Password from "../../projects/Password";
import Weather from "../../projects/Weather";
import "./style.css";

export default function Portfolio() {
  return (
    <Zoom delay={300}>
      <div className="portfolioCard">
        <Slide className="projectcontainer" right duration={2000} delay={800}>
          <YouTutor />
        </Slide>

        <Slide className="projectcontainer" left duration={2000} delay={800}>
          {/* <MapleValley /> */}
        </Slide>

        <Slide className="projectcontainer" right duration={2000} delay={800}>
          {/* <Findr /> */}
        </Slide>

        <Slide className="projectcontainer" left duration={2000} delay={800}>
          {/* <NoteTaker /> */}
        </Slide>

        <Slide className="projectcontainer" right duration={2000}>
          {/* <Weather /> */}
        </Slide>

        <Slide className="projectcontainer" left duration={2000}>
          {/* <Password /> */}
        </Slide>
      </div>
    </Zoom>
  );
}
