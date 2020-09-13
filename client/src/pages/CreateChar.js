import React, { useState, useEffect, useContext, useReducer } from "react";
//components
import ControlledCarousel from "../components/ControlledCarousel";
import UserForm from "../components/User/UserForm";
import Counter from "../components/User/Counter";

//context
import GameContext from "../utils/context/GameContext";
//utils
import API from "../utils/API";
import history from "../utils/History";
//css imports
import "./CreateChar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UserInput from "../components/User/UserInput";



function CreateChar() {
  


  //state and context hooks
  const [errMessage, setErrMessage] = useState(null);
  const gameContext = useContext(GameContext);

  const {
    setSavedCharacters
   
  } = gameContext;

  useEffect(() => {
    // console.log(`from Match ${fromMatch}: ${forPlayer}`);
    const getSavedCharacters = () => {
      API.getSavedFightCharacters()
        .then((res) => {
          setSavedCharacters(res.data);
        })
        .catch((err) => console.log(err));
    };

    getSavedCharacters();
    // eslint-disable-next-line
  }, []);

 

 
  return (
    <div className="wrapper">
      <div id="title">Create a Character</div>
      <div className="create-content"></div>

      <div className="row">
        <div className="col-4">
          <section className="p1-section">
            <h1>Player 1</h1>
            <ControlledCarousel playerNum="1" />
          </section>
        </div>

        <div className="col-6 counters">
          
          <UserInput />
          <Counter />
         

          <button
            id="sc-button"
            variant="btn btn-success"
            onClick={() => history.push("/matchSetup")}
>
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateChar;