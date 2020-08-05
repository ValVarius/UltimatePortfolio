import React from 'react'
import "./style.css";

export default function Password() {
    return (
        <div className="container project-container" id="password">


      <div className ="projectTitle"><h1>~Password~</h1></div>


      <div className = "project-img">
      <a
            href="https://valvarius.github.io/Password-Generator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Fade bottom duration={2000}> */}
              <img
                className="img-fluid"
                alt="Screenshot of password app"
                src={require("../../public/passwordApp.png")}
              />
            {/* </Fade> */}
          </a>
          </div>
      <div className="info" >
          A simple generator which allows the user to decide the type of characters and the length of the password.
      </div>
      <img
                className="img-fluid logit"
                src={require("../../public/git-white.png")}
                alt="GitHub Logo"
                
              />
    </div>
    )
}
