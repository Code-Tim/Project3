import React from "react";
import "./matchSetup.css";
import history from "../utils/History";

// import { browserRouter as Router, Route, Switch } from "react-router-dom";
// import Routes from './Routes';
// need main game page linked

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function matchSetup() {
  return (
    <div className="matchSetup">
      <div id="title">FIGHTING GAME</div>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => history.push("/playerSelect")}
        >
          MATCH 1{" "}
        </button>{" "}
        {/*need to show the 2 characters selected for the match*/}
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => history.push("/playerSelect")}
        >
          MATCH 2{" "}
        </button>{" "}
        {/*need to show the 2 characters selected for the match*/}
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => history.push("/playerSelect")}
        >
          MATCH 3{" "}
        </button>{" "}
        {/*need to show the 2 characters selected for the match*/}
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => history.push("/playerSelect")}
        >
          MATCH 4{" "}
        </button>{" "}
        {/*need to show the 2 characters selected for the match*/}
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => history.push("/playerSelect")}
        >
          MATCH 5{" "}
        </button>{" "}
        {/*need to show the 2 characters selected for the match*/}
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => history.push("/matchPlay")}
        >
          START MATCH{" "}
        </button>
      </form>
      {/* Need to show the matches that are created */}
    </div>
  );
}

export default matchSetup;
