import React from "react";
// import "./matchSetup.css";
import history from "../History"

// import { browserRouter as Router, Route, Switch } from "react-router-dom";
// import Routes from './Routes';
// need main game page linked

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function matchSetup() {
    return (

        <div className="matchSetup">
            <h1>Match 1</h1>
            <form>
                <button variant="btn btn-success" onClick={() => history.push('/playerSelect')}>match 1 </button> {/*need to show the 2 characters selected for the match*/}
            </form>
            <h1>Match 2</h1>
            <form>
                <button variant="btn btn-success" onClick={() => history.push('/playerSelect')}>match 2 </button> {/*need to show the 2 characters selected for the match*/}
            </form>
            <h1>Match 3</h1>
            <form>
                <button variant="btn btn-success" onClick={() => history.push('/playerSelect')}>match 3 </button> {/*need to show the 2 characters selected for the match*/}
            </form>
            <h1>Match 4</h1>
            <form>
                <button variant="btn btn-success" onClick={() => history.push('/playerSelect')}>match 4 </button> {/*need to show the 2 characters selected for the match*/}
            </form>
            <h1>Match 5</h1>
            <form>
                <button variant="btn btn-success" onClick={() => history.push('/playerSelect')}>match 5 </button> {/*need to show the 2 characters selected for the match*/}
            </form>

            <h1>Start Match</h1>
            <form>
                <button variant="btn btn-success" onClick={() => history.push('/matchPlay')}>Start Match </button>
            </form>
            {/* Need to show the matches that are created */}

        </div>





    )
};

export default matchSetup;
