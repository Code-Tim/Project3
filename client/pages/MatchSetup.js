import React, { useContext } from "react";
//import PropTypes from "prop-types";
import "./pages.css";
import { useEffect } from "react";
import GameContext from "../utils/context/GameContext";
import API from "../utils/API";
import { useState } from "react";
import PlayerSetup from "./PlayerSetup";
import { Link } from "react-router-dom";

//MatchSetup.propTypes = {};

function MatchSetup(props) {
  const gameContext = useContext(GameContext);

  const { savedCharacters, setSavedCharacters } = gameContext;

  const [showplayers, setShowplayers] = useState(false);

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const toggleModal = () => {
    setShowModal1(!showModal1);
  };

  return (
    <div className="Container-fluid matchSetup">
      <div className="row">
        <div className="col-auto">
          <div
            className="btn btn-dark"
            onClick={() => {
              setShowplayers(!showplayers);
            }}
          >
            Match1
          </div>
          <div className="btn btn-dark">Match2</div>
          <div className="btn btn-dark">Match3</div>
          <div className="btn btn-dark">Match4</div>
          <div className="btn btn-dark">Match5</div>
        </div>
        {showplayers && (
          <div className="col-auto">
            <Link
              to={{
                pathname: "/playerSelect",
                state: {
                  fromMatch: "1",
                },
              }}
              className="btn btn-primary"
            >
              Player1
            </Link>

            <button
              type="button"
              onClick={() => {
                setShowModal2(true);
              }}
            >
              Player2
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MatchSetup;
