import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import GameContext from "../../utils/context/GameContext";

ControlledCarousel.propTypes = {};

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const gameContext = useContext(GameContext);
  const listChars = gameContext.savedCharacters;

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval="10000000">
      {listChars.length ? (
        listChars.map((fightChar) => {
          console.log(fightChar.id + " " + fightChar.imgUrl);
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
