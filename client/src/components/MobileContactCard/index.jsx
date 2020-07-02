import React from "react";
import MailForm from "../MailForm";
import LinkedInBadge from "../LinkedInBadge";

export default function MobileContactCard() {
  return (
    <div>
      <div className="row">
        <LinkedInBadge />
      </div>

      <div className="row">
        <div
          className="LI-profile-badge"
          data-version="v1"
          data-size="large"
          data-locale="en_US"
          data-type="vertical"
          data-theme="dark"
          data-vanity="valerio-varani-635ba31a1"
        >
          <a
            className="LI-simple-link"
            href="https://www.linkedin.com/in/valerio-varani-635ba31a1?trk=profile-badge"
          >
            Valerio Varani
          </a>
        </div>
      </div>

      <div className="row">
        <MailForm />
      </div>
      {/* <a href="tel:+1-206-650-8647">Call Me</a> */}
    </div>
  );
}
