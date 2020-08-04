import React from 'react'
import "./style.css";

export default function NoteTaker() {
    return (
        <div className="container project-container" id="notes">


      <div class =" projectTitle"><h1>~Note Takes~</h1></div>


      <div className = "project-img">
      <a
            href= "https://notaking.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Fade bottom duration={2000}> */}
              <img
                className="img-fluid"
                alt="Screenshot of findr app"
                src={require("../../public/NoteTaker_50.png")}
              />
            {/* </Fade> */}
          </a>
          </div>
      <div className="info" >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
    )
}
