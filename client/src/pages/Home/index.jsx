import React, { useState, useEffect } from "react";
import HomePage from "../HomePage";
import HomePageMobile from "../HomePageMobile";
import Portfolio from "../Portfolio";
import PortfolioMobile from "../PortfolioMobile";
import ContactCard from "../ContactCard";
import MobileContactCard from "../MobileContactCard";
import { useLocation } from "react-router-dom";
import "./style.css";

export default function Home() {
  const location = useLocation();

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const updateSize = () => {
    

    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  return (
    <div className="container-fluid" id="homecontainer">
      {location.pathname === "/" && size.width >= 502 ? <HomePage /> : ""}
      {location.pathname === "/" && size.width < 502 ? <HomePageMobile /> : ""}
      {location.pathname === "/portfolio" && size.width >= 520 ? (
        <Portfolio />
      ) : (
        ""
      )}
      {location.pathname === "/portfolio" && size.width < 520 ? (
        <PortfolioMobile />
      ) : (
        ""
      )}

      {location.pathname === "/contacts" && size.width >= 520 ? (
        <ContactCard />
      ) : (
        ""
      )}
      {location.pathname === "/contacts" && size.width < 520 ? (
        <MobileContactCard/>
      ) : (
        ""
      )}
  
    </div>
  );
}
