import React from "react";
// import MailForm from "../../components/MailForm";
import LinkedInBadge from "../../components/LinkedInBadge";
import ContactBadge from "../../components/ContactBadge";
import Slide from "react-reveal/Slide";
// import Pulse from "react-reveal/Pulse";
// import Zoom from "react-reveal/Zoom";

import "./style.css";

export default function ContactCard() {
  if (window.innerWidth > 500) {
    return (
      <Slide right duration={3000}>
        <div className="contactCard">
          <LinkedInBadge />
          <ContactBadge />
        </div>
      </Slide>
    );
  } else {
    return (
      <Slide left duration={3000}>
        <div className="contactCard">
          <LinkedInBadge />
          <ContactBadge />
        </div>
      </Slide>
    );
  }
}
