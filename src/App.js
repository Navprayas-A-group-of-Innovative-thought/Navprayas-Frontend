import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Event from "./pages/Event";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Event} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
