import React from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';




const ContactList = (props) => {
    console.log(props)

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    
    const renderContactList = props.contacts.map((contact) => {
        return(
             <ContactCard
              contact={contact}
               clickHandler={deleteContactHandler}
               key={contact.id}
         />
      );
    });


 
    return(
        
        <div className="listcontainer">
     
       <h2 className="contactrender">Contact List
        <Link to="/add">
        <div ><button className="btn btn-large btn-block btn-primary center">AddContact</button></div>
        </Link>
        </h2>
        <hr></hr>
        <div className="col-sm-12" > 
        {renderContactList} 
        
        </div>
        </div>
    
    
    );
};
 
export default ContactList; 