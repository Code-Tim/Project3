import React from "react";
import "./playerSelect.css";
import history from "../History"
import Carousel from "../Carousel/Carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";



// import { browserRouter as Router, Route, Switch } from "react-router-dom";
// import Routes from './Routes';
// need main game page linked

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function playerSelect() {
    return (

        <div className="wrapper">
            <div id="title">FIGHTING GAME</div>


            <button id="fight-button" variant="btn btn-success" onClick={() => history.push('/Battle')}>FIGHT!!!</button>

            
           
            <section className= "p1-section">
                
            <h1>Player 1</h1>
            <Carousel />
                            {/* <button variant="btn btn-success" onClick={() => history.push('/charSelect')}>Player 1 </button> need to show the 2 characters selected for the match */}
            
             </section>

            <section2 className= "p2-section">
           
           <h1>Player 2</h1>
           <Carousel />
                        {/* <button variant="btn btn-success" onClick={() => history.push('/charSelect')}>Player 2 </button> need to show the 2 characters selected for the match */}
           

         </section2>


        </div>
    )
};

export default playerSelect;