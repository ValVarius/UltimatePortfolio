import React from "react";
import MailForm from "../../components/MailForm";
import LinkedInBadge from "../../components/LinkedInBadge";
import ContactBadge from "../../components/ContactBadge";
import Slide from 'react-reveal/Slide';



export default function MobileContactCard() {
  return (
    <Slide bottom cascade duration={2000}>
    <div>
      <div className="row mobContact">
        <LinkedInBadge />
      </div>
      <div className="row mobContact">
        <ContactBadge />
      </div>
      <div className="row mobContact">
        <MailForm />
      </div>
    </div>
    </Slide>
  );
}
