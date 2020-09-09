import React from "react";
import { Link, Button } from "react-router-dom";
import "./Battle.css";
// import "./BattleMoves.js";
// import { Button } from "react"
import history from "../History"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Battle() {
  return (

    <div className="wrapper">
      <div id="title">FIGHTING GAME</div>

        <button id="attack" onClick="fight(id)">Attack</button>
        <button id="punch" onClick="fight(id)">Punch</button>
        <button id="kick" onClick="fight(id)">Kick</button>
        <button id="bodyslam" onClick="fight(id)">Body Slam</button>
        <button id="piledrive" onClick="fight(id)">Piledriver</button>
        <button id="counter" onClick="fight(id)">Counter</button>

    </div>

   



  );
}

export default Battle;