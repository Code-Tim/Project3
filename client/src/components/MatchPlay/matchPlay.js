import React from "react";
// import "./matchPlay.css";
import history from "../History"


// Do we need this page?

function matchPlay() {
    return (

        <div className="Start Match">
            <h1>Start Match</h1>
            <form>
                <button variant="btn btn-success" onClick={() => history.push('/charSelect')}>Start Match </button>
            </form>
            {/* Need to show the matches that are created */}


        </div>
    )
};

export default matchPlay;