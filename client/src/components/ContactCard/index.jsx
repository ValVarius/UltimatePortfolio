import React from "react";

import MailForm from "../MailForm";
import LinkedInBadge from "../LinkedInBadge";
import ContactBadge from "../ContactBadge";

// import "./style.css";


export default function ContactCard() {
  
  return (
    
      <div className = "row">
      
      <div className="col-4">
      <LinkedInBadge />
      </div>
      <div className="col-4">
        <ContactBadge/>
      </div>
      <div className="col-4"> 
      <MailForm/>
      </div>
      
      

    </div>

    
  );
}
