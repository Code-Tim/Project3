import React from "react";
//import { Link, Button } from "react-router-dom";
import "./Battle.css";
// import { Button } from "react"
//import history from "../../utils/History"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Battle() {
  let savedCompMove = "";
  let yourHealth = 100;
  let compHealth = 100;

  let totRounds = 0;

  // "attack"

  let res = "";
  let showBattleProgress = false;
  let playByPlay = ""; //document.getElementById("announcements");
  let yourHealthBar = document.getElementById("yourHealthBar");
  let compHealthBar = document.getElementById("compHealthBar");
  let punchButton = document.getElementById("attack");
  let counterButton = document.getElementById("counter");
  let playAgain = document.getElementById("playAgain");

  //Moves >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // triggers the fight in the HTML
  const fight = (id) => {
    console.log("inside fight");
    showBattleProgress = true;
    addRound();
    compMove(id);
    healthChange();
    gameOver();
  };
  // adds a round to the round counters
  const addRound = () => {
    totRounds += 1;
  };

  //adds the counter action to punch
  const counter = (y, c) => {
    let move = Math.floor(Math.random() * 5);
    if (move >= 3 && y === "attack") {
      res = "Computers counter was successful! You took 10 damage";
      yourHealth -= 10;
    } else if (move >= 3 && y === "counter") {
      res = "Your counter was successful! Comp took 10 damage";
      compHealth -= 10;
    } else if (move < 3 && y === "attack") {
      res = "Computer counter failed! You dealt 15 damage!";
      compHealth -= 15;
    } else if (move < 3 && y === "counter") {
      res = "Your counter was not successful! You were dealt 15 damage!";
      yourHealth -= 15;
    }
  };

  // Dislpays results of the round
  const roundResults = (res) => {
    playByPlay += res + "<br>";
  };

  const healthChange = () => {
    yourHealthBar.style.width = yourHealth + "%";
    compHealthBar.style.width = compHealth + "%";
  };

  const gameOver = () => {
    if (yourHealth === 0 || compHealth === 0) {
      res = "GAME OVER!";
      roundResults(res);
      punchButton.disabled = true;
      counterButton.disabled = true;
      playAgain.disabled = false;
    }
  };

  //The Game >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // Takes the moves of the player and generates one for the comp and then runs the damage step
  const compMove = (id) => {
    let move = Math.floor(Math.random() * 4 + 1);
    if (move <= 3) {
      savedCompMove = "attack";
    } else {
      savedCompMove = "counter";
    }
    res =
      "Your move is <span>" +
      id +
      "</span> and the computers move is <span>" +
      savedCompMove +
      "</span> on round " +
      totRounds;
    damageStep(id, savedCompMove);
    roundResults(res);
  };

  //proccesses the moves
  const damageStep = (y, c) => {
    if (y === "attack" && c === "attack") {
      res = "Both players took damage";
      if (compHealth >= 10 && yourHealth >= 10) {
        compHealth -= 10;
        yourHealth -= 10;
      } else {
        compHealth = 0;
        yourHealth = 0;
      }
    } else if (y === "counter" && c === "counter") {
      res = "Defensive stances taken in vain";
    } else if (y === "attack" && c === "counter") {
      res = "Comp took a defensive stance and prepares to counter";
      counter(y, c);
    } else if (y === "counter" && c === "attack") {
      res = "You took a defensive stance and prepare to counter";
      counter(y, c);
    }
  };

  return (
    <div className="wrapper">
      <div>
        <div id="title">FIGHTING GAME</div>

        <button id="attack" onClick={() => fight()}>
          Attack
        </button>
        <button id="punch" onClick={() => fight()}>
          Punch
        </button>
        <button id="kick" onClick={() => fight()}>
          Kick
        </button>
        <button id="bodyslam" onClick={() => fight()}>
          Body Slam
        </button>
        <button id="piledrive" onClick={() => fight()}>
          Piledriver
        </button>
        <button id="counter" onClick={() => fight()}>
          Counter
        </button>
      </div>
      {showBattleProgress && <div>playByPlay</div>}
      <div id="yourHealth">
        <div id="yourHealthBar"></div>
      </div>
      <div id="compHealth">
        <div id="compHealthBar"></div>
      </div>
      <div id="announcements"></div>
    </div>
  );
}

export default Battle;
