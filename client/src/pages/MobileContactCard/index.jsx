import React from "react";
import MailForm from "../../components/MailForm";
import LinkedInBadge from "../../components/LinkedInBadge";
import ContactBadge from "../../components/ContactBadge";
import Slide from 'react-reveal/Slide';
import "./style.css";



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
