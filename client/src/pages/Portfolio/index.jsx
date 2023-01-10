import React from "react";
import Slide from "react-reveal/Slide";
import "./style.css";

// import Fade from "react-reveal/Fade";
// import Pulse from "react-reveal/Pulse";
import Project from "../../components/Project";

export default function Portfolio() {
  const sensapp = {
    id: "sensapp",
    title: "SensApp",
    screenshotlink: require("../../public/sensapp.gif"),
    repolink: "https://github.com/ValVarius/SenseAppReact",
    applink: "https://sensapp.herokuapp.com",
    text:
      "A MERN project that assists in tracking the body reactions to food. This app is an improvement from the current paper forms in that it allows the storing and retrieval of every meal by date. I also provides the user with charts representing the occurrences of symptoms in associations with the respective food items. Sensitivity-App is: in progress, as there are more features that be added.",
    logos: [
      "mern",
      "js-html-css-logo",
      "react-logo",
      "express-logo",
      "mongo-logo",
      "mongoose-logo",
      "bootstrap-logo",
    ],
  };
  const tutor = {
    id: "tutor",
    title: "YouTutor",
    screenshotlink: require("../../public/YouTutor.png"),
    applink: "https://you-tutor.herokuapp.com/",
    repolink: "https://github.com/ValVarius/YouTutor",
    text:
      "This application is a student aid intented to enhance the learning experience by providing a platform where students can both seek help on a subject they have not mastered yet and offer help on those subjects on which they are confident. It is also deployed on its own domain.",
    logos: [
      "js-html-css-logo",
      "react-logo",
      "express-logo",
      "sequelize-logo",
      "sql-logo",
      "mysql-logo",
      "bulma-logo-name",
    ],
  };
  const maple = {
    id: "maple",
    title: "Maple Valley",
    screenshotlink: require("../../public/mapleValley_50.png"),
    applink: "https://maplevalley.herokuapp.com/",
    repolink: "https://github.com/ValVarius/MapleValley",
    text:
      "An online registration system for volunteers and parents of campers from Girl Scouts Maple Valley Day Camp that will replace paper registration and facilitate camp planning by allowing registration details to be easily shared to camp planning committee.",
    logos: [
      "js-html-css-logo",
      "handlebars-logo",
      "node-logo-dark",
      "sequelize-logo",
      "sql-logo",
      "mysql-logo",
      "nodemailer-logo",
      "bulma-logo-name",
    ],
  };
  const findr = {
    id: "findr",
    title: "Findr",
    screenshotlink: require("../../public/findr_50.png"),
    applink: "https://valvarius.github.io/FINDR/",
    repolink: "https://github.com/ValVarius/FINDR",
    text:
      "FINDR is an application that simply and randomly displays an image from a restaurant in a card that can be cycled through until an appealing option is picked. Once the top choice is chosen, the restaurant information will be shown to get a user to their food as fast as possible.",
    logos: ["js-html-css-logo", "jquery-logo-dark-full", "ajax-logo"],
  };
  const note = {
    id: "note",
    title: "Note Taker",
    screenshotlink: require("../../public/NoteTaker_50.png"),
    applink: "https://notaking.herokuapp.com/",
    repolink: "https://github.com/ValVarius/Note-Taking",
    text:
      "This project includes html files,test files, and javascript files for backend coding. It then connects the backend to front end to display the information. The purpose of this project is to allow user to add their Notes to the page.",
    logos: ["js-html-css-logo", "node-logo-dark"],
  };
  const weather = {
    id: "weather",
    title: "Weather App",
    screenshotlink: require("../../public/weather.png"),
    applink: "https://valvarius.github.io/weather-Chanel/",
    repolink: "https://github.com/ValVarius/weather-Chanel",
    text:
      "This project will get user's input of the city and then display the current weather as well as the 5 day forecast for that city.",
    logos: ["js-html-css-logo", "jquery-logo-dark-full"],
  };
  const password = {
    id: "password",
    title: "Password",
    screenshotlink: require("../../public/passwordApp.png"),
    applink: "https://valvarius.github.io/Password-Generator/",
    repolink: "https://github.com/ValVarius/Password-Generator",
    text:
      "A simple password generator which allows the user to decide the type of characters and the length of the password.",
    logos: ["js-html-css-logo"],
  };
  // const nuovoprogetto = {
  //   id: "",
  //   title: "",
  //   screenshotlink: require(""),
  //   applink:"",
  //   repolink: "",
  //   text:"",
  //   logos: [],
  // };

  return (
    <div className="portfolioCard">
      <Slide className="projectcontainer" left up duration={3500}>
        <Project {...sensapp} />
      </Slide>
      <Slide className="projectcontainer" left up duration={5000}>
        <Project {...tutor} />
      </Slide>
      <Slide className="projectcontainer" left up duration={5000}>
        <Project {...maple} />
      </Slide>
      <Slide className="projectcontainer" left up duration={5000}>
        <Project {...findr} />
      </Slide>
      <Slide className="projectcontainer" left up duration={2000}>
        <Project {...note} />
      </Slide>
      <Slide className="projectcontainer" left up duration={2000}>
        <Project {...weather} />
      </Slide>
      <Slide className="projectcontainer" left up duration={2000}>
        <Project {...password} />
      </Slide>
    </div>
  );
}
