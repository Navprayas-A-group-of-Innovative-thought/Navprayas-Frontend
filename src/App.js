import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Event from "./pages/Event";
import LoginRegister from "./pages/Login-Register"
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
          <Route exact path="/login" component={() => <LoginRegister title="Login" formType="login" /> } />
          <Route exact path="/signup" component={() => <LoginRegister title="Create New Account" formType="signup" />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
