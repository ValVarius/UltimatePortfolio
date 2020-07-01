import React, { useEffect } from "react";import "./style.css";
import MailForm from "../MailForm";

export default function ContactCard() {
  
  // useEffect(() => {
  //   window.location.reload(false);
  // }, []);

  return (
    <div>
      <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="valerio-varani-635ba31a1"><a className="LI-simple-link" href='https://www.linkedin.com/in/valerio-varani-635ba31a1?trk=profile-badge'>Valerio Varani</a></div>
      
      
      <MailForm/>
      

      {/* <a href="tel:+1-206-650-8647">Call Me</a> */}
    </div>
  );
}
