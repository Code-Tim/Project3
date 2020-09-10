import React, { useEffect, useContext } from "react";
import API from "../utils/API";
import ControlledCarousel from "../components/ControlledCarousel";
import GameContext from "../utils/context/GameContext";
import history from "../utils/History";
import "./playerSelect.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function PlayerSelect() {
  const gameContext = useContext(GameContext);

  const {
    savedCharacters,
    setSavedCharacters,
    playerMatch1,
    setPlayerMatch1,
  } = gameContext;

  const selectCharacter = (playerNum, choosenOne) => {
    console.log("inside select char");
    console.log(choosenOne);

    if (playerMatch1 && playerMatch1.length <= parseInt(playerNum)) {
      let newarray = playerMatch1;
      newarray[playerNum - 1] = choosenOne;
      setPlayerMatch1(newarray);
    } else {
      let newarray = [];
      newarray[0] = choosenOne;
      setPlayerMatch1(newarray);
    }
  };

  useEffect(() => {
    // const { fromMatch, forPlayer } = props.location.state;

    // console.log(`from Match ${fromMatch}: ${forPlayer}`);
    const getSavedCharacters = () => {
      API.getSavedFightCharacters()
        .then((res) => {
          setSavedCharacters(res.data);
          console.log(res.data[1]);
        })
        .catch((err) => console.log(err));
    };

    getSavedCharacters();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapper">
      <div id="title">SELECT PLAYER</div>
      <div className="row justify-content-center">
        <button
          id="fight-button"
          variant="btn btn-success"
          onClick={() => history.push("/MatchSetup")}
        >
          DONE
        </button>{" "}
      </div>
      <div className="row">
        <div className="col-6">
          <section className="p1-section">
            <h1>Player 1</h1>
            <ControlledCarousel />
          </section>
        </div>
        <div className="col-6">
          <section2 className="p2-section">
            <h1>Player 2</h1>
            <ControlledCarousel />
          </section2>
        </div>
      </div>
    </div>
  );
}

export default PlayerSelect;
