import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Event from "./pages/Event";
import Header from "./components/Header";
import Quicklinks from "./components/Quicklinks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Event} />
        </Switch>
      </BrowserRouter>
      <div className="App">
        <Quicklinks />
      </div>
    </>
  );
}

export default App;
