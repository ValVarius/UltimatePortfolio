import React, { useState, useEffect } from "react";
import HomePage from "../HomePage";
import Portfolio from "../Portfolio";
import ContactCard from "../ContactCard";
import { useLocation } from "react-router-dom";
import "./style.css";

export default function Home() {
  const location = useLocation();

  return (
    <div id="homecontainer">
      {location.pathname === "/" ? <HomePage /> : ""}
      {location.pathname === "/portfolio" ? <Portfolio /> : ""}
      {location.pathname === "/contacts" ? <ContactCard /> : ""}
    </div>
  );
}
