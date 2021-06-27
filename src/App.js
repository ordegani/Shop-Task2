import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Menu from "./Menu";
import Saved from "./Saved";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

