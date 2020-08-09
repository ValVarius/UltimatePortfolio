import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";
import Findr from "../../projects/Findr";
import MapleValley from "../../projects/MapleValley";
import NoteTaker from "../../projects/NoteTaker";
import Password from "../../projects/Password";
import Weather from "../../projects/Weather";
import "./style.css";

export default function Portfolio() {
  return (
    //  {/* FIRST ROW */}
    <Pulse>
      {/* First Row */}
      <div className="card homecard">
        <div className="row portRow">
          <div className="col-1"></div>
          <div className="col-5">
            <Slide right duration={2000}>
              <Findr />
            </Slide>
          </div>

          <div className="col-5">
            <Slide left duration={2000}>
              <MapleValley />
            </Slide>
          </div>
          <div className="col-1"></div>
        </div>
        {/* Second Row */}
        <div className="row portRow">
        <div className="col-1"></div>
          <div className="col-5">
            <Slide right duration={2000}>
              <NoteTaker />
            </Slide>
          </div>

          <div className="col-5">
            <Slide left duration={2000}>
              <Password />
            </Slide>
          </div>
          <div className="col-1"></div>
        </div>
        {/* Third Row */}
        <div className="row portRow">
        <div className="col-1"></div>
          <div className="col-5">
            <Slide right duration={2000}>
              <Weather />
            </Slide>
          </div>
        </div>
      </div>
    </Pulse>
  );
}
