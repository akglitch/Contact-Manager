import React from 'react'

import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    return (
      
    
     <div class="container">
  <div class="row">
    <div class=" col-md-6">
    <Link to={`/contact/${id}`}> 
    <ul>
           <div><i class="fas fa-user-circle"></i>{name}</div>
            <div><i class="fas fa-paper-plane"></i>{email}</div>
            </ul>
    </Link>      
    <hr></hr>
    </div>
    <div class=" col-md-6">
    <button className="btn btn-danger " onClick={() => props.clickHandler(id)}>Delete</button>
    <hr></hr>
    </div>
   
  </div>
</div>
    
    ); 
};

export default ContactCard