import React from "react";
import "./style.css";

export default function Findr() {
  return (
    <div className="container project-container" id="findr">
      <div class="projectTitle">
        <h1>~Findr~</h1>
      </div>

      <div className="project-img">
        <a
          href="https://commiewalker.github.io/Findr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid"
            alt="Screenshot of findr app"
            src={require("../../public/findr_50.png")}
          />
        </a>
      </div>
      <div className="info">
        FINDR is an application that simply and randomly displays an image from
        a restaurant in a card that can be cycled through until an appealing
        option is picked. Once the top choice is chosen, the restaurant
        information will be shown to get a user to their food as fast as
        possible.
      </div>

      <a
          href="https://commiewalker.github.io/Findr/"
          target="_blank"
          rel="noopener noreferrer"
        >
      <img
                className="img-fluid logit"
                src={require("../../public/git-white.png")}
                alt="GitHub Logo"
                
              />
              </a>
    </div>
  );
}
