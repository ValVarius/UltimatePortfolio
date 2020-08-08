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

export default function PortfolioMobile() {
  return (
    <div>
      <div className="row mobProject">
        <Slide right duration={2000}>
          <Findr />
        </Slide>
      </div>

      <div className="row mobProject">
        <Slide left duration={2000}>
          <MapleValley />
        </Slide>
      </div>

      <div className="row mobProject">
        <Slide right duration={2000}>
          <NoteTaker />
        </Slide>
      </div>

      <div className="row mobProject">
        <Slide left duration={2000}>
          <Password />
        </Slide>
      </div>

      <div className="row mobProject">
        <Slide right duration={2000}>
          <Weather />
        </Slide>
      </div>
    </div>
  );
}
