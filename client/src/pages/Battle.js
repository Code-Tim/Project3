import React, { useState } from "react";
import PropTypes from "prop-types";

Battle.propTypes = {};

function Battle(props) {
  const [totalRounds, setTotalRounds] = useState(0);

  const fight = (moveId) => {
    addRound();
    // compMove(id);
    // healthChange();
    // gameOver();
  };

  function addRound() {
    setTotalRounds(totalRounds + 1);
  }

  return (
    <div className="wrapper">
      <div id="title">BATTLE</div>
      <div className="row justify-content-center">
        <button
          id="fight-button"
          variant="btn btn-success"
          onClick={() => fight("punch")}
        >
          BODYSLAM
        </button>
        <button
          id="fight-button"
          variant="btn btn-success"
          onClick={() => fight("punch")}
        >
          COUNTER
        </button>
        <button
          id="fight-button"
          variant="btn btn-success"
          onClick={() => fight("attack")}
        >
          ATTACK
        </button>
        <button
          id="fight-button"
          variant="btn btn-success"
          onClick={() => fight("punch")}
        >
          PUMCH
        </button>
        <button
          id="fight-button"
          variant="btn btn-success"
          onClick={() => fight("punch")}
        >
          KICK
        </button>
        <button
          id="fight-button"
          variant="btn btn-success"
          onClick={() => fight("punch")}
        >
          PILE DRIVER
        </button>
      </div>
    </div>
  );
}

export default Battle;
