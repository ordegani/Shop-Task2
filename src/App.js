import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Saved from "./ShowSaved";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import ShowSaved from "./ShowSaved";

function App() {
  const [saved, setSaved] = useState([]);

  function save(dish) {
    setSaved([...saved, dish]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Menu onSave={save} />
          </Route>
          <Route exact path="/saved">
            <ShowSaved saved={saved} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
