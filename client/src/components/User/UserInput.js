import React from "react";
import "./UserInput.css";



function UserInput() {
  const [state, setState] = React.useState({
    CharName: "",
    NickName: "",
    bio: "",
    dropdown: "",
    
 
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
      
    <div className="app col-5">
        
      <form>
        <label>
          <div className="heading">Character Name</div>
          <input
            type="text"
            name="CharName"
            value={state.CharName}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="heading">Nickname</div>
          <input
            type="text"
            name="NickName"
            value={state.NickName}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="heading">Bio</div>
          <textarea name="bio" value={state.bio} onChange={handleChange} />
        </label>
      
        
          
         
        <label>
          <div className="heading">Optional dropdown</div>
          <select name="dropdown" onChange={handleChange} value={state.version}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            
          </select>
        </label>
      </form>
      <pre>{JSON.stringify(state )}</pre>
      
    </div>
    
    
    
  );
}

export default UserInput;