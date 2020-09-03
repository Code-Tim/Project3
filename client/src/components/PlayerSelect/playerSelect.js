import React from "react";
// import "./playerSelect.css";
import history from "../History"


// import { browserRouter as Router, Route, Switch } from "react-router-dom";
// import Routes from './Routes';
// need main game page linked

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function playerSelect() {
    return (

        <div className="playerSelect">
            <h1>Player 1</h1>
            <form>
                <button variant="btn btn-success" onClick={() => history.push('/charSelect')}>Player 1 </button> {/*need to show the 2 characters selected for the match*/}
            </form>
            <h1>Player 2</h1>
            <form>
                <button variant="btn btn-success" onClick={() => history.push('/charSelect')}>Player 2 </button> {/*need to show the 2 characters selected for the match*/}
            </form>


        </div>
    )
};

export default playerSelect;