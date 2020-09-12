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
  const {
    savedCharacters,
    playersForMatch1,
    setPlayersForMatch1,
    playersForMatch2,
    setPlayersForMatch2,
    playersForMatch3,
    setPlayersForMatch3,
    playersForMatch4,
    setPlayersForMatch4,
    playersForMatch5,
    setPlayersForMatch5,
    matchNum,
  } = gameContext;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const selectCharacter = (choosenOne) => {
    console.log("inside select char");
    console.log(choosenOne);
    //this code needs to refactored
    if (matchNum === "1") {
      if (playersForMatch1 && playersForMatch1.length > 0) {
        let newarray = new Array(...playersForMatch1);
        newarray[props.playerNum - 1] = choosenOne;
        setPlayersForMatch1(newarray);
      } else {
        let newarray = [0, 0];
        newarray[props.playerNum - 1] = choosenOne;
        setPlayersForMatch1(newarray);
      }
    }
    if (matchNum === "2") {
      if (playersForMatch2 && playersForMatch2.length > 0) {
        let newarray = new Array(...playersForMatch2);
        newarray[props.playerNum - 1] = choosenOne;
        setPlayersForMatch2(newarray);
      } else {
        let newarray = [0, 0];
        newarray[props.playerNum - 1] = choosenOne;
        setPlayersForMatch2(newarray);
      }
    }
    if (matchNum === "3") {
      if (playersForMatch3 && playersForMatch3.length > 0) {
        let newarray = new Array(...playersForMatch3);
        newarray[props.playerNum - 1] = choosenOne;
        setPlayersForMatch3(newarray);
      } else {
        let newarray = [0, 0];
        newarray[props.playerNum - 1] = choosenOne;
        setPlayersForMatch3(newarray);
      }
    }
    if (matchNum === "4") {
      if (playersForMatch4 && playersForMatch4.length > 0) {
        let newarray = new Array(...playersForMatch4);
        newarray[props.playerNum - 1] = choosenOne;
        setPlayersForMatch4(newarray);
      } else {
        let newarray = [0, 0];
        newarray[props.playerNum - 1] = choosenOne;
        setPlayersForMatch4(newarray);
      }
    }
    if (matchNum === "5") {
      if (playersForMatch5 && playersForMatch5.length > 0) {
        let newarray = new Array(...playersForMatch5);
        newarray[props.playerNum - 1] = choosenOne;
        setPlayersForMatch5(newarray);
      } else {
        let newarray = [0, 0];
        newarray[props.playerNum - 1] = choosenOne;
        setPlayersForMatch5(newarray);
      }
    }
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval="40000000">
      {savedCharacters.length ? (
        savedCharacters.map((fightChar) => {
          return (
            
            <Carousel.Item key={fightChar.id}>
              <img
                className="d-block w-400 h-400"
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
