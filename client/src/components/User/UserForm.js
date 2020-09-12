import React, { useContext, useReducer } from "react";
import userContext from "./UserContext";

function UserForm() {
  const userModel = useContext(userContext);

   
  return (
    <form className="form-group">
     
      <label htmlFor="name">Name: </label>
      <input className="form-control mb-4" id="name" {...userModel.name} />
      <label htmlFor="status">Nickname: </label>
      <input className="form-control mb-4" id="status" {...userModel.status} />
      
    </form>
  );
}

export default UserForm;