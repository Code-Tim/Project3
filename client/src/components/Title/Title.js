import React from "react";
import { Link, Button } from "react-router-dom";
import "./title.css";
// import { Button } from "react"
import history from "../History"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Title() {
  return (

    <div className="wrapper">
      <div id="title">FIGHTING GAME</div>

      <div className="start">
        <Link to="/StartGame" className="btn btn-primary">Sign up</Link></div>
      {/* <Link to="/StartGame"><button className="btn btn-primary" id="start-button">START</button></Link></div> */}
      {/* <div className="create">
        <Link to="/CreateChar"><button className="btn btn-primary" id="start-button">START</button></Link>
        </div>  */}
      <form>
        <button variant="btn btn-success" onClick={() => history.push('/charCreate')}>Create Character</button>
      </form>


    </div>

  );
}

export default Title;