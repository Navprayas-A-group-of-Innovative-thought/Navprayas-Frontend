import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Event from "./pages/Event";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Event} />
          <Route exact path = "/signUp" component={SignUp} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
