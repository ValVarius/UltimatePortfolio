import React from "react";
import "./style.css";


export default function LinkedInBadge() {
  return <div className = "container badge">
   
    <div className = "top">
    <div className="dot"></div>
      
    </div>
    <div className = "bottom">
    <br/>
    <br/>
    <br/>
      <h1 className="space">Valerio Varani</h1>
      <h2 className="space">Full Stack Web Developer</h2>
      <p id = "uw"> University of Washington</p>
      <br/>
      <br/>
      <a href="https://www.linkedin.com/in/valerio-varani-635ba31a1/" className="btn btn-primary btn-lg active" id = "viewBtn" role="button" aria-pressed="true">View Profile</a>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
      

      <img
                className="card-img img-fluid "
                src={require("../../public/LI-Logo-W.png")}
                alt="LinkedIn Logo"
                id="logoLinkedIn"
              />
              </div>
    </div>
    
    </div>;
}
