import React from "react";
import MailForm from "../../components/MailForm";
import LinkedInBadge from "../../components/LinkedInBadge";
import ContactBadge from "../../components/ContactBadge";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";

import "./style.css";

export default function ContactCard() {
  return (
    <Zoom delay={500}>
      <div className="row">
        <div className="col-4">
          <Slide right duration={2000} delay={500}>
            <LinkedInBadge />
          </Slide>
        </div>

        <div className="col-4">
          <Pulse>
            <ContactBadge />
          </Pulse>
        </div>

        <div className="col-4">
          <Slide left duration={2000} delay={500}>
            <MailForm />
          </Slide>
        </div>
      </div>
    </Zoom>
  );
}
