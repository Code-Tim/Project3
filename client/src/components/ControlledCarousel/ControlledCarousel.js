import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import GameContext from "../../utils/context/GameContext";

ControlledCarousel.propTypes = {
  playerNum: PropTypes.number,
};

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const gameContext = useContext(GameContext);
  const { savedCharacters, playerMatch1, setPlayerMatch1 } = gameContext;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const selectCharacter = (choosenOne) => {
    console.log("inside select char");
    console.log(choosenOne);
    debugger;
    if (playerMatch1 && playerMatch1.length > 0) {
      let newarray = new Array(...playerMatch1);
      newarray[props.playerNum - 1] = choosenOne;
      setPlayerMatch1(newarray);
    } else {
      let newarray = [0, 0];
      newarray[0] = choosenOne;
      setPlayerMatch1(newarray);
    }
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval="10000000">
      {savedCharacters.length ? (
        savedCharacters.map((fightChar) => {
          return (
            <Carousel.Item key={fightChar.id}>
              <img
                className="d-block w-100 h-100"
                src={fightChar.imgUrl}
                alt={fightChar.name}
              />
              <Carousel.Caption>
                <h3>{fightChar.name}</h3>
                <p>{fightChar.description}</p>
                <button
                  onClick={() => {
                    selectCharacter(fightChar.id);
                  }}
                >
                  Select Player
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
      ) : (
        <h2 className="text-center">No Saved Characters</h2>
      )}
    </Carousel>
  );
}

export default ControlledCarousel;
