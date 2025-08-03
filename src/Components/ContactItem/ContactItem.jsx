import React from 'react';
import { Link } from 'react-router';
import './ContactItem.css'

const ContactItem = ({ contact }) => {
  return (
     <Link to={`/contact/${contact.id}/messages`}className="contact-item"> 
      <img src= {contact.avatar} alt={`${contact.name}'s avatar`}className="avatar" width={100} /> 
      <div className="contact-info">      
           <h2 className="contact-name">{contact.name}</h2>
          <span className="contact-lastConnection">{contact.lastConnection}</span>
          
      </div> 
    </Link>
  );
};



export default ContactItem;


