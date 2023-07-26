import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
//import api from "../../api/contacts"
import Header from "../Header";
import AddContact from "../AddContact";
import ContactCardDeatail from "../ContactCardDetail";

import "./App.css";
import ContactList from "../ContactList";
import EditContact from "../EditContact";
const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]); // JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ??
  const[searchterm,setSearchTerm]=useState("");
  const[searchResults,setSearchResults] = useState([])
  const getAllContacts = async () => {
    const response = await axios.get("http://localhost:3006/contacts");
    return response.data;
  };

  useEffect(() => {
    const retrieveAllContacts = async () => {
      const allContacts = await getAllContacts();
      if (allContacts) setContacts(allContacts);
    };
    retrieveAllContacts();
  }, []);

  /* const contacts = [
    { id: "1", person: "ravi", email: "ravi@gmail.com" },
    { id: "2", person: "dipesh", email: "dipesh@gmail.com" },
  ];*/

  const onAddContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await axios.post(
      "http://localhost:3006/contacts",
      request
    );
    setContacts([...contacts, response.data]);
  };


  const onupdateContactHandler = async  (contact) => {
  console.log(contact.id)
  const response = await axios.put(`http://localhost:3006/contacts/${contact.id}`,contact)
  console.log(response)
  const {id,name,email}= response.data
  setContacts(contacts.map((contact)=>{
    return contact.id === id ? response.data:contact})
  )}
  
  /*useEffect(()=>{
     const retrieveContacts= )
     console.log(retrieveContacts)
     if(retrieveContacts) 
    
     setContacts(retrieveContacts)
  },[]) */

  const onSearchTerm = (searchterm) =>{
    if(searchterm !== ""){
      const newContactList = contacts.filter((contact)=>{
        return Object.values(contact)
        .join("")
        .toLowerCase()
        .includes(searchterm.toLowerCase())
      })
      setSearchResults(newContactList)
    }
    else{
      setSearchResults(contacts)
    }

  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="column">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={searchterm.length<1?contacts:searchResults}
                searchterm={searchterm}
                setSearchTerm={setSearchTerm}
                onSearchTerm={onSearchTerm}
              />
            }
          />
          <Route
            path="/addcontact"
            element={<AddContact onAddContactHandler={onAddContactHandler} />}
          />
          <Route path="/contactdetail/:id" element={<ContactCardDeatail />} />
          <Route
            path="/contacts/update/:id"
            element={
              <EditContact onupdateContactHandler={onupdateContactHandler} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
