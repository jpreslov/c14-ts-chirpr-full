import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Details from "./views/Details";
import Admin from "./views/Admin";
import Home from "./views/Home";
import Compose from "./views/Compose";

const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/compose">
          <Compose />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
        <Route exact path="/admin/:id">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;
