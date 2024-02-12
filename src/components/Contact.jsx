// import React from 'react'

import { contactDetails } from "../constants";

const Contact = () => {
  return (
    <div>
      <h2 className="contactHeader">Contact</h2>
      <div className="contactContent">
        {contactDetails.map((contact) => (
          <div key={contact.id} className="flex flex-wrap">
            <div className="mr-4">{contact.title} :</div>
            <a
              href={contact.openLink}
              target="_blank"
              rel="noreferrer"
              className="contactOpenLink"
            >
              {contact.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
