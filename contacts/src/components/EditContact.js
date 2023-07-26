import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
const EditContact = (props) => {
const location = useLocation();
 console.log(location)
   const {id,name,email} = location.state.contact ;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const navigate = useNavigate();

  const onUpdate = () => {
    // e.prevent.default();
    if (newName === "" || newEmail === "") 
    {
      alert("All fields are mandatory");
      return;
    }
    console.log(name, email);
    
    const con = { id:id, name: newName, email: newEmail };
    props.onupdateContactHandler(con);
    setNewName("");
    setNewEmail("");
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
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <label>Email </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
      </form>
      <button type="button" className="btn btn-primary mt-5" onClick={onUpdate}>
        update
      </button>
    </div>
  );
};

export default EditContact;
