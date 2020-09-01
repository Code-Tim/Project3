
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import StartGame from "./components/MatchPlay/matchPlay";
import CharCreate from "./components/createChar/charCreate";
import Title from "./components/Title/Title";
import MatchSelect from "./components/MatchSelect/matchSelect";
import CharSelect from './components/CharSelect/charSelect';
import PlayerSelect from './components/PlayerSelect/playerSelect';
import history from './components/History';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <h1>WHERE AM I?</h1>
                <Switch>
                    <Route path="/" exact component={Title} />
                    <Route path="/title" exact component={Title} />
                    <Route path="/charCreate" exact component={CharCreate} />
                    <Route path="/matchSelect" exact component={MatchSelect} />
                    <Route path="/playerSelect" exact component={PlayerSelect} />
                    <Route path="/matchPlay" exact component={CharSelect} />
                    <Route path="/start" exact component={StartGame} />
                </Switch>
            </Router>
        )
    }
}