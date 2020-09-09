import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import StartGame from "./components/MatchPlay/matchPlay";
import CharCreate from "./components/createChar/charCreate";
import Title from "./components/Title/Title";
import MatchSetup from "./components/MatchSetup/matchSetup";
import CharSelect from './components/CharSelect/charSelect';
import PlayerSelect from './components/PlayerSelect/playerSelect';
import Battle from './components/Battle/Battle';
import history from './components/History';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>

                <Switch>
                    <Route path="/" exact component={Title} />
                    <Route path="/title" exact component={Title} />
                    <Route path="/charCreate" exact component={CharCreate} />
                    <Route path="/matchSetup" exact component={MatchSetup} />
                    <Route path="/playerSelect" exact component={PlayerSelect} />
                    <Route path="/charSelect" exact component={CharSelect} />

                    <Route path="/battle" exact component={Battle} />

                    <Route path="/start" exact component={StartGame} />
                </Switch>
            </Router>
        )
    }
}