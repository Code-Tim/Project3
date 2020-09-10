import React from "react";
import { Link, Button } from "react-router-dom";
import "./title.css";
// import { Button } from "react"
import history from "../../utils/History";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Title() {
  return (
    <div className="wrapper">
      <div id="title">FIGHTING GAME</div>

      {/* <div className="start">
        <Link to="/StartGame" className="btn btn-primary">Sign up</Link></div> */}
      <form>
        <button
          id="start-button"
          variant="btn btn-success"
          onClick={() => history.push("/matchSetup")}
        >
          Start Game
        </button>
      </form>
      {/* <Link to="/StartGame"><button className="btn btn-primary" id="start-button">START</button></Link></div> */}
      {/* <div className="create">
        <Link to="/CreateChar"><button className="btn btn-primary" id="start-button">START</button></Link>
        </div>  */}
      <form>
        <button
          id="create-button"
          variant="btn btn-success"
          onClick={() => history.push("/charCreate")}
        >
          Create Character
        </button>
      </form>
    </div>
  );
}

export default Title;
