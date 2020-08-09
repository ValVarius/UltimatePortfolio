import React from "react";
import Zoom from "react-reveal/Zoom";
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
    <Zoom>
    <div className="card portfolioCard">
      <div className="row mobProject">
        <Zoom duration={2000}>
          <Findr />
        </Zoom>
      </div>

      <div className="row mobProject">
        <Zoom duration={2000}>
          <MapleValley />
        </Zoom>
      </div>

      <div className="row mobProject">
        <Zoom duration={2000}>
          <NoteTaker />
        </Zoom>
      </div>

      <div className="row mobProject">
        <Zoom duration={2000}>
          <Password />
        </Zoom>
      </div>

      <div className="row mobProject">
        <Zoom duration={2000}>
          <Weather />
        </Zoom>
      </div>
    </div>
    </Zoom>
  );
}
