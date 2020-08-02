import React, { useState, useEffect } from "react";
import HomeCard from "../../components/HomeCard";
import MobileHome from "../../components/MobileHome";
import PortfolioCard from "../../components/PortfolioCard";
import MobilePortfolio from "../../components/MobilePortfolio";
import ContactCard from "../../components/ContactCard";
import MobileContactCard from "../../components/MobileContactCard";
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
        <PortfolioCard />
      ) : (
        ""
      )}
      {location.pathname === "/portfolio" && width < 1100 ? (
        <MobilePortfolio />
      ) : (
        ""
      )}

      {/* {location.pathname === "/contacts" ? <ContactCard /> : ""} */}
      {location.pathname === "/contacts" && width >= 630 ? <ContactCard /> : ""}
      {location.pathname === "/contacts" && width < 630 ? <MobileContactCard /> : ""}
    </div>
  );
}
