import React from "react";
import MailForm from "../MailForm";
import LinkedInBadge from "../LinkedInBadge";
import ContactBadge from "../ContactBadge";

export default function MobileContactCard() {
  return (
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
  );
}
