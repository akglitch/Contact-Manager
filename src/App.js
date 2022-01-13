import { useState,useEffect } from 'react';
import './App.css' ;
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/Header';
import { v4 as uuid_v4 } from "uuid";




function App() {
  const LOCAL_STORAGE_KEY = "contacts";
 const [contacts,setContacts] =  useState([]);
  

 const addContactHandler = (contact) => {
   console.log(contact)
   setContacts([...contacts,{id:uuid_v4(),...contact}]);
 }
   
 const  removeContactHandler =(id) => {
   const newContactList = contacts.filter((contact) =>{
     return contact.id !== id;
   });

   setContacts(newContactList)
 }
 useEffect(() => {
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retrieveContacts) setContacts(retrieveContacts);
   },[]);


 useEffect(() => {
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
 },[contacts]);
  return (
    <div className="container">
      <Router>
    <Header />
    <Switch>

    <Route path="/" 
    exact 
    component={(props) =>(
       <ContactList
       {...props} 
       contacts={contacts}
        getContactId={removeContactHandler} />)}
        />



   
   <Route
   path="/add"
   render={(props) => (
     <AddContact {...props} addContactHandler={addContactHandler} />
   )}
   />


      </Switch>
    </Router>
    </div>
  );
}

export default App;
