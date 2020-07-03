import React from "react";
import "./style.css";


export default function ContactBadge() {
  return <div className = "container badge" id = "general">
   
    <div className = "top" >
    <div className="dot" id = "gitDot"></div>
      
    </div>
    <div className = "bottom" id = "gitBottom">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      
      <a class = "space" href="https://github.com/ValVarius" >
    
    <div>
    <p id = "gitName">
      <img
                className="card-img img-fluid "
                src={require("../../public/GitHub-Mark-120px-plus.png")}
                alt="GitHub Logo"
                id="logoGit"
              />
              
              <img
                className="card-img img-fluid "
                src={require("../../public/GitHub_Logo.png")}
                alt="GitHub Logo"
                id="logoGit2"
              />
              ValVarius</p>
    </div>
    </a>
    

    <a class = "space" href="tel:+1-206-650-8647">
    <p id = "phone">
    
              +1 206 650 8647
              <img
                className="card-img img-fluid "
                src={require("../../public/CirclePhone.png")}
                alt="GitHub Logo"
                id="phonelogo"
              />
              </p>
    </a>
    
    
    <p class = "space" id = "mail">notitiami
    <img
                className="card-img img-fluid "
                src={require("../../public/emailicon.png")}
                alt="mail Logo"
                id="maillogo"
              />
              gmail.com</p>
    
    
    </div>
    </div>
}
