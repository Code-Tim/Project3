import { useState } from "react";
const useGame = () => {
  const [savedCharacters, setSavedCharacters] = useState([]);
  const [playersForMatch1, setPlayersForMatch1] = useState([]);
  const [playersForMatch2, setPlayersForMatch2] = useState([]);
  const [playersForMatch3, setPlayersForMatch3] = useState([]);
  const [playersForMatch4, setPlayersForMatch4] = useState([]);
  const [playersForMatch5, setPlayersForMatch5] = useState([]);

  const [matchNum, setMatchNum] = useState("");

  const [game, setGame] = useState([]);
  //game is an array of obejcts
  //[{match: "1",
  //results:"won/lost/tie"}]

  const setMatch = (matchnum, objKey, objKeyValue) => {
    //let matchnumber = "match" + matchnum;
    let newState = new Object(...match1);
    newState[objKey] = objKeyValue;
    setMatch1(newState);
  };

  const [match1, setMatch1] = useState({
    matchName: "",
    description: "",
    player1: "",
    player2: "",
    won: false,
    setupComplete: false,
  });

  return {
    match1,
    setMatch1,
    matchNum,
    setMatchNum,
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
    savedCharacters,
    setSavedCharacters,
  };
};
export default useGame;
