import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import "./Battle.css";
import ProgressBar from "react-bootstrap/ProgressBar";

Battle.propTypes = {
  matchNum: PropTypes.number,
};

function Battle(props) {
  const [totalRounds, setTotalRounds] = useState(0);
  const [result, setResult] = useState("");
  const [fightDisabled, setFightDisabled] = useState(false);
  const [player1Health, setPlayer1Health] = useState(100);
  const [player2Health, setPlayer2Health] = useState(100);

  // useEffect(() => {

  // }, [player1Health, player2Health]);

  const fight = (moveId) => {
    addRound();
    opponentMove(moveId);
    //healthChange(); //this is progress bar it should be drendered as the value changes
    gameOver();
  };

  const addRound = () => {
    setTotalRounds(totalRounds + 1);
  };

  //adds the counter action to punch
  const counter = (userMove) => {
    let move = Math.floor(Math.random() * 5);
    if (move >= 3 && userMove === "attack") {
      setResult(
        result + "Computers counter was successful! You took 10 damage&#13"
      );
      setPlayer1Health(player1Health - 10);
    } else if (move >= 3 && userMove === "counter") {
      setResult(
        result + "Your counter was successful! Comp took 10 damage&#13"
      );
      setPlayer2Health(player2Health - 10);
    } else if (move < 3 && userMove === "attack") {
      setResult(result + "Computer counter failed! You dealt 15 damage!&#13");
      setPlayer2Health(player2Health - 15);
    } else if (move < 3 && userMove === "counter") {
      setResult(
        result +
          "Your counter was not successful! You were dealt 15 damage!&#13"
      );
      setPlayer1Health(player1Health - 15);
    }
  };

  //proccesses the moves
  const damageStep = (userMove, generatedMove) => {
    if (userMove === "attack" && generatedMove === "attack") {
      setResult(result + "Both players took damage&#13");
      if (player2Health >= 10 && player1Health >= 10) {
        setPlayer2Health(player2Health - 10);
        setPlayer1Health(player1Health - 10);
      } else {
        setPlayer2Health(0);
        setPlayer1Health(0);
      }
    } else if (userMove === "counter" && generatedMove === "counter") {
      setResult(result + "Defensive stances taken in vain&#13");
    } else if (userMove === "attack" && generatedMove === "counter") {
      setResult(
        result + "Comp took a defensive stance and prepares to counter&#13"
      );
      counter(userMove, generatedMove);
    } else if (userMove === "counter" && generatedMove === "attack") {
      setResult(
        result + "You took a defensive stance and prepare to counter&#13"
      );
      counter(userMove, generatedMove);
    }
  };

  // Takes the moves of the player1 and generates one for player 2 and then runs the damage step

  const opponentMove = (moveId) => {
    let move = Math.floor(Math.random() * 4 + 1);
    let savedCompMove = "";

    if (move <= 3) {
      savedCompMove = "attack";
    } else {
      savedCompMove = "counter";
    }

    setResult(
      result +
        "Your move is " +
        moveId +
        " and the computers move is " +
        savedCompMove +
        " on round&#13 " +
        totalRounds
    );
    damageStep(moveId, savedCompMove);
    //roundResults(res); //display results should take place through react renders
  };

  const gameOver = () => {
    if (player1Health === 0 || player2Health === 0) {
      setResult(result + "GAME OVER!");
      setFightDisabled(true);
    }
  };

  return (
    <div className="wrapper">
      <div id="title">BATTLE</div>
      <div className="row justify-content-center">
        <button
          id="moves-button"
          disabled={fightDisabled}
          variant="btn btn-success"
          onClick={() => fight("punch")}
        >
          BODYSLAM
        </button>
        <button
          id="moves-button"
          disabled={fightDisabled}
          variant="btn btn-success"
          onClick={() => fight("punch")}
        >
          COUNTER
        </button>
        <button
          id="moves-button"
          disabled={fightDisabled}
          variant="btn btn-success"
          onClick={() => fight("attack")}
        >
          ATTACK
        </button>
        <button
          id="moves-button"
          disabled={fightDisabled}
          variant="btn btn-success"
          onClick={() => fight("punch")}
        >
          PUNCH
        </button>
        <button
          id="moves-button"
          disabled={fightDisabled}
          variant="btn btn-success"
          onClick={() => fight("punch")}
        >
          KICK
        </button>
        <button
          id="moves-button"
          disabled={fightDisabled}
          variant="btn btn-success"
          onClick={() => fight("punch")}
        >
          PILE DRIVER
        </button>
      </div>
      <Container fluid>
        <Row id="progressbarRow">
          <Col>
            <ProgressBar now={player1Health} label={`${player1Health}%`} />
          </Col>
        </Row>

        <Row id="progressbarRow">
          <Col>
            <ProgressBar now={player2Health} label={`${player2Health}%`} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="battleArea">
                <Form.Label>Battle results</Form.Label>
                <Form.Control
                  as="textarea"
                  disabled
                  value={result}
                  placeholder="Start the BAAATLE!!!!!"
                  onChange={(r) => setResult(r)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Battle;
