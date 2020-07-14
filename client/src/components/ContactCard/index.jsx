import React from "react";
import MailForm from "../MailForm";
import LinkedInBadge from "../LinkedInBadge";
import ContactBadge from "../ContactBadge";
import Slide from 'react-reveal/Slide';
import Zoom from "react-reveal/Zoom";

import "./style.css";

export default function ContactCard() {
  return (
    
      
    <div className="row">
      
      <div className="col-4">
      <Slide left duration={1000}>
        <LinkedInBadge />
        </Slide>
      </div>
      

      <div className="col-4">
      <Zoom duration={2000}>
        <ContactBadge />
        </Zoom>
      </div>

      <div className="col-4">
      <Slide right duration={1000}>
        <MailForm />
        </Slide>
      </div>
    </div>
    
     
  );
}
