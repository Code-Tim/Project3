import { useState } from "react";
const useGame = () => {
  const [savedCharacters, setSavedCharacters] = useState([]);
  const [match1, setMatch1] = useState({
    matchName: "",
    description: "",
    player1: "",
    player2: "",
    won: false,
    setupComplete: false,
  });

  const [playerMatch1, setPlayerMatch1] = useState([]);

  const [matchName, setMatchName] = useState("");
  const setMatch = (matchnum, objKey, objKeyValue) => {
    let matchnumber = "match" + matchnum;
    let newState = new Object(...match1);
    newState[objKey] = objKeyValue;
    setMatch1(newState);
  };

  return {
    match1,
    setMatch1,
    setMatch,
    matchName,
    setMatchName,
    playerMatch1,
    setPlayerMatch1,
    savedCharacters,
    setSavedCharacters,
  };
};
export default useGame;
