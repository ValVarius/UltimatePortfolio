import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Fade left>
        <Link className="navbar-brand" to="/">
          Valerio Varani
        </Link>
      </Fade>
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
          <Fade right cascade>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                Contact
              </Link>
            </li> */}
            
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/contacts">Contact</a>
            </li>

          </Fade>
        </ul>
      </div>
    </nav>
  );
}
