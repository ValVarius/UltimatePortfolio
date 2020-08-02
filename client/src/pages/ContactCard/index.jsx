import React from "react";
import MailForm from "../../components/MailForm";
import LinkedInBadge from "../../components/LinkedInBadge";
import ContactBadge from "../../components/ContactBadge";
import Slide from 'react-reveal/Slide';
import Zoom from "react-reveal/Zoom";
import Flip from 'react-reveal/Flip';
import "./style.css";
  

export default function ContactCard() {
  return (
    
      
    <div className="row">
      
      <div className="col-4">
      <Slide right duration={2000}>
        <LinkedInBadge />
        </Slide>
      </div>
      

      <div className="col-4">
      <Flip duration={2000}>
        <ContactBadge />
        </Flip>
      </div>

      <div className="col-4">
      <Slide left duration={2000}>
        <MailForm />
        </Slide>
      </div>
    </div>
    
     
  );
}
