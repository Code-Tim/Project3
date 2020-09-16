import React, { useContext } from "react";
import "./title.css";
import history from "../../utils/History";

import GameContext from "../../utils/context/GameContext";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Title() {
  const gameContext = useContext(GameContext);
  const { game, setGame } = gameContext;

  const startGame = () => {
    let initialGameState = {
      match1: {
        player1: "",
        player2: "",
        matchResult: "",
      },
      match2: {
        player1: "",
        player2: "",
        matchResult: "",
      },
      match3: {
        player1: "",
        player2: "",
        matchResult: "",
      },
      match4: {
        player1: "",
        player2: "",
        matchResult: "",
      },
      match5: {
        player1: "",
        player2: "",
        matchResult: "",
      },
    };

    setGame({ ...initialGameState });

    history.push("/matchSetup");
  };

  return (
    <div className="wrapper">
      <div id="title">Finish Them Wrestling</div>
      <div id="title">FTW</div>
      <img src="./public/assets/images/npmInstall.png" alt="npm install"></img>

      <form>
        <button
          id="start-button"
          variant="btn btn-success"
          onClick={() => startGame()}
        >
          Start Game
        </button>
      </form>

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
