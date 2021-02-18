import React, { Component } from 'react';
import { Button } from "reactstrap";
import { Switch, Route, Link } from "react-router-dom";
import Logictest from "./components/logictest";
import FE from "./components/feapptest";
import "./App.css";

const App = () => {
  return (
    <>
    <div className="App">
      <h1 className="app-title">UX Tech Assessment</h1>
      <div className="menu">
        <Button id="logictest">
          <Link to ="/logictest">Logic Test</Link>
        </Button>
        <br />
        <Button id="feapp">
          <Link to ="/feapptest">FE App Test (Unfinished)</Link>
        </Button>
      </div>

      <br />

      <Switch>
        <Route path="/logictest">
          <Logictest/>
        </Route>
        <Route path="/feapptest">
          <FE/>
        </Route>
      </Switch>
    </div>
    </>
  );
}

export default App;
