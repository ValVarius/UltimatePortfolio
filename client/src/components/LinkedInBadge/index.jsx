import React from "react";
import "./style.css";

export default function LinkedInBadge() {
  return (
    <div className="badge" id="LinkedInBadge">
      
      <div className="backcontact" id="linkedinback"></div>
      <div className="bottom" id = "linkBottom">
       
        <h1 className="space" id="linkediname">
          Valerio Varani
        </h1>
        <h2 className="space">Full Stack Web Developer</h2>
        <p className="space" id="uw">
          University of Washington
        </p>

        <a
          href="https://www.linkedin.com/in/valerio-varani-635ba31a1/"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          id="viewBtn"
          role="button"
          aria-pressed="true"
        >
          View Profile
        </a>

        <div id = "linkedInWrapper">
          <img
            className="card-img img-fluid "
            src={require("../../public/LI-Logo-W.png")}
            alt="LinkedIn Logo"
            id="logoLinkedIn"
          />
        </div>
      </div>
    </div>
  );
}
