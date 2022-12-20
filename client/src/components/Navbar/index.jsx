import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " id="nav">
      <div className="navbar-brand" to="/" id="myName">
        <Fade left big cascade duration={2000}>
          Valerio Varani
        </Fade>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <Fade left big cascade duration={1000}>
                About
              </Fade>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              <Fade left big cascade duration={1000}>
                Portfolio
              </Fade>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">
              <Fade left big cascade duration={1000}>
                Contact
              </Fade>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
