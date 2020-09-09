import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Title from './components/Title/Title';
import MatchPlay from './components/MatchPlay/matchPlay';
import MatchSelect from './components/MatchSetup/matchSetup';
import CharCreate from './components/createChar/charCreate';
import CharSelect from './components/CharSelect/charSelect';
import Routes from "./Routes"

function App() {
  
  return (<Routes></Routes>
    // <Router>


    //   {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //   <Switch>
    //     <Route path="/">
    //       <Title />
    //     </Route>
    //     <Route path="/title">
    //       <Title />
    //     </Route>
    //     <Route path="/matchPlay">
    //       <MatchPlay />
    //     </Route>
    //     <Route path="/charCreate">
    //       <CharCreate />
    //     </Route>
    //     <Route path="/charSelect">
    //       <CharSelect />
    //     </Route>
    //     <Route path="/MatchSelect">
    //       <MatchSelect />
    //     </Route>
    //   </Switch>

    // </Router >
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;