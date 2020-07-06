import React from "react";
import MailForm from "../MailForm";
import LinkedInBadge from "../LinkedInBadge";
import ContactBadge from "../ContactBadge";
import Slide from 'react-reveal/Slide';
import "./style.css";

export default function ContactCard() {
  return (
    <Slide bottom cascade duration={2000}>
    <div className="row">
      <div className="col-4">
        <LinkedInBadge />
      </div>
      <div className="col-4">
        <ContactBadge />
      </div>
      <div className="col-4">
        <MailForm />
      </div>
    </div>
     </Slide>
  );
}
