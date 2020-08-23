import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/home";
// import Event from "./pages/Event";
import Auth from "./pages/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {
            //<Route exact path="/events" component={Event} />}
          }
          <Route
            exact
            path="/login"
            component={() => <Auth title="Login" formType="login" />}
          />
          <Route
            exact
            path="/signup"
            component={() => (
              <Auth title="Create New Account" formType="signup" />
            )}
          />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
