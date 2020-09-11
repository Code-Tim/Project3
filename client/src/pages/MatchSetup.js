import React, { useContext, useEffect } from "react";
import "./matchSetup.css";
import history from "../utils/History";
import GameContext from "../utils/context/GameContext";

//this function is to redirect the user to select players for each match
//the match number that we need to setup is set in the context
//this could also be done using props
export function MatchSetup() {
  //context and hooks
  const gameContext = useContext(GameContext);
  const { setMatchNum } = gameContext;

  //intenal functions
  const setupMatch = (matchNum) => {
    setMatchNum(matchNum);
    history.push("/playerSelect");
  };

  //raison d'etre
  return (
    <div className="matchSetup">
      <div id="title">FIGHTING GAME</div>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => setupMatch("1")}
        >
          MATCH 1
        </button>
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => setupMatch("2")}
        >
          MATCH 2
        </button>
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => setupMatch("3")}
        >
          MATCH 3
        </button>
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => setupMatch("4")}
        >
          MATCH 4
        </button>
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => setupMatch("5")}
        >
          MATCH 5
        </button>
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => history.push("/battle")}
        >
          START MATCH
        </button>
      </form>
      {/* Need to show the matches that are created */}
    </div>
  );
}

export default MatchSetup;
