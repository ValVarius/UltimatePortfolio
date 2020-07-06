import React from "react";
import MailForm from "../MailForm";
import LinkedInBadge from "../LinkedInBadge";
import ContactBadge from "../ContactBadge";
import Slide from 'react-reveal/Slide';


export default function MobileContactCard() {
  return (
    <Slide bottom cascade duration={2000}>
    <div>
      <div className="row">
        <LinkedInBadge />
      </div>
      <div className="row">
        <ContactBadge />
      </div>
      <div className="row">
        <MailForm />
      </div>
    </div>
    </Slide>
  );
}
