import React from "react";
import { useLocation } from "react-router-dom"

const ContactCardDeatail = ()=>{
    const location= useLocation();
    console.log(location)
     const{name,email}= location.state.contact
return(<div class="container">
    <div>Details of :{name}</div>
    <div>{name}</div>
    <div>{email}</div>
    
</div>)
}

export default ContactCardDeatail