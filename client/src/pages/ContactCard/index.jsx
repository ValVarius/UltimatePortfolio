import React from "react";
// import MailForm from "../../components/MailForm";
import LinkedInBadge from "../../components/LinkedInBadge";
import ContactBadge from "../../components/ContactBadge";
// import Slide from "react-reveal/Slide";
// import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";

import "./style.css";

export default function ContactCard() {
  return (
    <Zoom delay={500}>
      <div className="contactCard">
        <LinkedInBadge />
        <ContactBadge />
      </div>
    </Zoom>
  );
}
