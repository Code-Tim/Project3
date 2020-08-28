import React from "react";
import "./title.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Title() {
  return (

    <div className= "wrapper">
    <div id= "title">FIGHTING GAME</div>

    <div className ="start"><button className="btn btn-primary" id="start-button">START</button></div>
    <div className ="create"><button className="btn btn-primary" id="create-button">CREATE CHARACTER</button></div>
    


</div>
    
  );
}

export default Title;