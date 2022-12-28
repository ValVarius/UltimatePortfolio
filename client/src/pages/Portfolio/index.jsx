import React from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import "./style.css";
import YouTutor from "../../projects/YouTutor";

// import Fade from "react-reveal/Fade";
// import Pulse from "react-reveal/Pulse";
import Findr from "../../projects/Findr";
import MapleValley from "../../projects/MapleValley";
import NoteTaker from "../../projects/NoteTaker";
import Password from "../../projects/Password";
import Weather from "../../projects/Weather";

export default function Portfolio() {
  return (
    // <Zoom delay={300}>
    <div className="portfolioCard">
      <Zoom className="projectcontainer" delay={300} duration={1500}>
        <YouTutor />
      </Zoom>

      <Zoom className="projectcontainer" delay={300} duration={1500}>
        <MapleValley />
      </Zoom>

      <Zoom className="projectcontainer" delay={300} duration={1500}>
        <Findr />
      </Zoom>

      <Zoom className="projectcontainer" delay={300} duration={1500}>
        <NoteTaker />
      </Zoom>

      <Slide className="projectcontainer" right duration={2000}>
        <Weather />
      </Slide>

      <Slide className="projectcontainer" left duration={2000}>
        <Password />
      </Slide>
    </div>
    // </Zoom>
  );
}
