// ==============================================================================
// Name :MAtchResults.js
// Author :Sunitha/Chris/Tim/Majid
// Date : 09/15/2020
// Purpose: This javascript file describes the match results page ; it
// collates the results and displays the overall winner
// ==============================================================================
import React, { useContext, useEffect, useState } from "react";
import "./matchResults.css";
import history from "../utils/History";
import GameContext from "../utils/context/GameContext";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

//this function is to redirect the user to select players for each match
//the match number that we need to setup is set in the context
//this could also be done using prop/s
export function MatchResults() {
  //context and hooks
  const gameContext = useContext(GameContext);
  const { game } = gameContext;

  // const [overallWinner, setOverallWinner] = useState(" UNKNOWN");

  // useEffect(() => {
  //   let numberofWins = 0;
  //   let numberofLosses = 0;

  //   setOverallWinner("UNKNOWN");
  //   if (
  //     game["match1"]["matchResult"] &&
  //     game["match2"]["matchResult"] &&
  //     game["match3"]["matchResult"] &&
  //     game["match4"]["matchResult"] &&
  //     game["match5"]["matchResult"]
  //   ) {
  //     for (let i = 1; i <= 5; i++) {
  //       let matchKey = "match" + i.toString();
  //       if (game[matchKey]["matchResult"] === "won") {
  //         numberofWins++;
  //       } else if (game[matchKey]["matchResult"] === "lost") {
  //         numberofLosses++;
  //       }
  //     } //for
  //     if (numberofWins > numberofLosses) {
  //       setOverallWinner(": YOU ");
  //     } else if (numberofWins > numberofLosses) {
  //       setOverallWinner(": OPPONENT ");
  //     } else {
  //       setOverallWinner(": TIE ");
  //     }
  //   } //if
  // }, []);

  //raison d'etre
  return (
    <div className="matchResults">
      <div id="title">RESULTS</div>

      <img className="beltIcon" src="/assets/images/ftwLogo.png" alt="Logo" />
      <Container>
        <Row className="justify-content-center p-1">
          <Col className="justify-content-center p-1">
            <button id="match" variant="btn btn-success">
              MATCH 1
            </button>
          </Col>
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match1"]["player1"]}{" "}
            {game["match1"]["matchResult"] === "won" ? "(Winner)" : ""}
          </Col>{" "}
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match1"]["player2"]}{" "}
            {game["match1"]["matchResult"] === "lost" ? "(Winner)" : ""}
          </Col>
        </Row>
        <Row className="justify-content-center p-1">
          <Col className="justify-content-center p-1">
            <button id="match" variant="btn btn-success">
              MATCH 2
            </button>
          </Col>
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match2"]["player1"]}{" "}
            {game["match2"]["matchResult"] === "won" ? "(Winner)" : ""}
          </Col>{" "}
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match2"]["player2"]}{" "}
            {game["match2"]["matchResult"] === "lost" ? "(Winner)" : ""}
          </Col>
        </Row>
        <Row className="justify-content-center p-1">
          <Col className="justify-content-center p-1">
            <button id="match" variant="btn btn-success">
              MATCH 3
            </button>
          </Col>
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match3"]["player1"]}{" "}
            {game["match3"]["matchResult"] === "won" ? "(Winner)" : ""}
          </Col>{" "}
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match3"]["player2"]}{" "}
            {game["match3"]["matchResult"] === "lost" ? "(Winner)" : ""}
          </Col>
        </Row>
        <Row className="justify-content-center p-1">
          <Col className="justify-content-center p-1">
            <button id="match" variant="btn btn-success">
              MATCH 4
            </button>
          </Col>
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match4"]["player1"]}{" "}
            {game["match4"]["matchResult"] === "won" ? "(Winner)" : ""}
          </Col>{" "}
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match4"]["player2"]}{" "}
            {game["match4"]["matchResult"] === "lost" ? "(Winner)" : ""}
          </Col>
        </Row>
        <Row className="justify-content-center p-1">
          <Col className="justify-content-center p-1">
            <button id="match" variant="btn btn-success">
              MATCH 5
            </button>
          </Col>
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match5"]["player1"]}{" "}
            {game["match5"]["matchResult"] === "won" ? "(Winner)" : ""}
          </Col>{" "}
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match5"]["player2"]}{" "}
            {game["match5"]["matchResult"] === "lost" ? "(Winner)" : ""}
          </Col>
        </Row>
        <Row className="justify-content-center p-1">
          <Col className="justify-content-center p-1">
            <button
              id="match"
              variant="btn btn-success"
              onClick={() => history.push("/title")}
            >
              DONE
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MatchResults;
