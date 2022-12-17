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
    //  {/* FIRST ROW */}
    <Zoom delay={300}>
      <div className="card portfolioCard">
        {/* First Row */}
        <div className="row portRow">
          <div className="col-6">
            <Slide right duration={2000} delay={800}>
              <YouTutor />
            </Slide>
          </div>

          <div className="col-6">
            <Slide left duration={2000} delay={800}>
              <MapleValley />
            </Slide>
          </div>
        </div>
        {/* Second Row */}
        <div className="row portRow">
          <div className="col-6">
            <Slide right duration={2000} delay={800}>
              <Findr />
            </Slide>
          </div>

          <div className="col-6">
            <Slide left duration={2000} delay={800}>
              <NoteTaker />
            </Slide>
          </div>
        </div>
        {/* Third Row */}
        <div className="row portRow">
          <div className="col-6">
            <Slide right duration={2000}>
              <Weather />
            </Slide>
          </div>

          <div className="col-6">
            <Slide left duration={2000}>
              <Password />
            </Slide>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
