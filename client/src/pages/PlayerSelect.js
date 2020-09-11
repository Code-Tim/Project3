import React, { useState, useEffect, useContext } from "react";
//components
import ControlledCarousel from "../components/ControlledCarousel";
//context
import GameContext from "../utils/context/GameContext";
//utils
import API from "../utils/API";
import history from "../utils/History";
//css imports
import "./playerSelect.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PlayerSelect() {
  //state and context hooks
  const [errMessage, setErrMessage] = useState(null);
  const gameContext = useContext(GameContext);

  const {
    setSavedCharacters,
    matchNum,
    playersForMatch1,
    playersForMatch2,
    playersForMatch3,
    playersForMatch4,
    playersForMatch5,
  } = gameContext;

  useEffect(() => {
    // console.log(`from Match ${fromMatch}: ${forPlayer}`);
    const getSavedCharacters = () => {
      API.getSavedFightCharacters()
        .then((res) => {
          setSavedCharacters(res.data);
        })
        .catch((err) => console.log(err));
    };

    getSavedCharacters();
    // eslint-disable-next-line
  }, []);

  //internal functions
  const checkIfDoneAndLeave = () => {
    debugger;
    if (matchNum === "1") {
      //check if both players are the same if so pop an error
      if (
        playersForMatch1 &&
        playersForMatch1.length === 2 &&
        (playersForMatch1[0] === playersForMatch1[1] ||
          playersForMatch1[0] === 0 ||
          playersForMatch1[1] === 0)
      ) {
        //pop up an error
        setErrMessage(
          " Warning !!! Both players need to be selected and you cannot wrestle yourself...!!!!"
        );
      } else {
        setErrMessage(null);
        history.push("/MatchSetup");
      }
    } //matchnum check
    else {
      history.push("/MatchSetup");
    }
  };

  //raison d'etre
  return (
    <div className="wrapper">
      <div id="title">SELECT PLAYER</div>
      <div className="row justify-content-center">
        <button
          id="fight-button"
          variant="btn btn-success"
          onClick={() => checkIfDoneAndLeave()}
        >
          DONE
        </button>
      </div>
      <div className="row justify-content-center">
        {errMessage && <h5 className="error">{errMessage}</h5>}
      </div>
      <div className="row">
        <div className="col-6">
          <section className="p1-section">
            <h1>Player 1</h1>
            <ControlledCarousel playerNum="1" />
          </section>
        </div>
        <div className="col-6">
          <section className="p2-section">
            <h1>Player 2</h1>
            <ControlledCarousel playerNum="2" />
          </section>
        </div>
      </div>
    </div>
  );
}

export default PlayerSelect;
