import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Menu from "./Menu";
import Saved from "./Saved";
import NavBar from "./NavBar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar>
          <Switch>
            <Route path="/Home" component={Menu} />
            {/* <Route exact path="/saved" component={Saved} /> */}
          </Switch>
        </NavBar>
      </BrowserRouter>
    </div>
  );
}

export default App;