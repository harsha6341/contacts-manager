import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const rendredContactList = props.contacts.map((item) => {
    return <ContactCard item={item} />;
  });
  return (
    <div className="container mt-5">
      <h4>
        Contact List
        <Link to="/addcontact">
          <button type=" button" className="btn btn-info">
            Add contact
          </button>
        </Link>
      </h4>
      <div class="input-group">
        <input
          type="text"
          value={props.searchterm}
          class="form-control"
          placeholder="Enter Contactdetails"
          onChange={(e)=>{
            props.setSearchTerm(e.target.value)
            console.log(props.searchterm)
            props.onSearchTerm(props.searchterm)
          }}
        />
        <span class="input-group-text" id="basic-addon2">
          Search
        </span>
      </div>
      {rendredContactList}
    </div>
  );
};

export default ContactList;
