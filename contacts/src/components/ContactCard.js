import React from 'react'
import {Link} from 'react-router-dom'

const ContactCard =(props)=>{
      const {id,name,email} =  props.item
      
    return(
      <Link to={`contactdetail/${id}`} state= {{contact:props.item}}>
       <div>
        <div>{name}</div>
        <div className="d-flex flex-row">
          <div>{email}</div>
          <button tyoe="button" className="btn btn-danger">
            Delete
          </button>
          <Link to={`contacts/update/${id}`} state={{contact:props.item}}>
          <button tyoe="button" className="btn btn-danger">
           update
          </button>
          </Link>
        </div>
        <div className="border-bottom border-dark mt-3"></div>
      </div>
      </Link>
    )
}

export default ContactCard