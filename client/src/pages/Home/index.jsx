import React, { useState, useEffect } from "react";
import HomeCard from "../../components/HomeCard";
import MobileHome from "../../components/MobileHome";
import Portfolio from "../Portfolio";
import PortfolioCard from "../../components/PortfolioCard";
import MobilePortfolio from "../../components/MobilePortfolio";
import ContactCard from "../ContactCard";
import MobileContactCard from "../MobileContactCard";
import { useLocation } from "react-router-dom";
// import "./style.css";

export default function Home() {
  const location = useLocation();

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <div className="container-fluid" id = "homecontainer">
      {location.pathname === "/" && width >= 502 ? <HomeCard /> : ""}
      {location.pathname === "/" && width < 502 ? <MobileHome /> : ""}
      {location.pathname === "/portfolio" && width >= 1100 ? (
        <Portfolio/>
      ) : (
        ""
      )}
      {location.pathname === "/portfolio" && width < 1100 ? (
        <Portfolio />
      ) : (
        ""
      )}

      {location.pathname === "/contacts" && width >= 520 ? <ContactCard /> : ""}
      {location.pathname === "/contacts" && width < 520 ? <MobileContactCard /> : ""}
    </div>
  );
}
