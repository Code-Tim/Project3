import React from "react";
// import { browserRouter as Router, Route, Switch } from "react-router-dom";
import "./charCreate.css";
// import Routes from './Routes';
// need main game page linked

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function CharCreate() {
    return (

        <div className="CreateChar">
            <h1>Character Creation</h1>
            {/* 
    this.state = {
                playerName : '',
			HP: 50,
			Stamina : 60,
			Atk : 10,
			Def : 10
		}; */}

            {/* this.handleChangeName = this.handleChangeName.bind(this);
		this.changeHP = this.changeHP.bind(this);
		this.takeDamage = this.takeDamage.bind(this);
		this.doDamage = this.doDamage.bind(this); */}

        </div>
    )
};

export default CharCreate;