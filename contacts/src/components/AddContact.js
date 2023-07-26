import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const onAdd = () => {
    // e.prevent.default();
    if (name === "" || email === "") 
    {
      alert("All fields are mandatory");
      return;
    }
    console.log(name, email);
    
    const con = { name: name, email: email };
    props.onAddContactHandler(con);
    setName("");
    setEmail("");
    navigate("/");
  };
  return (
    <div className="container">
      <h4 className="mt-3">Add Contact</h4>
      <form className="mt-5">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
      <button type="button" className="btn btn-primary mt-5" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};

export default AddContact;
