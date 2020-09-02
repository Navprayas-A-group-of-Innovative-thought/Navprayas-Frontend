import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Event from "./pages/Event";
import Auth from "./pages/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import NewPassword from "./pages/Auth/NewPassword";
import Activate from "./pages/Auth/Activate";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";
import { isAuth } from "./_helpers/auth";

function App() {
  console.log(process.env.REACT_APP_API_URL);

  const loggedIn = isAuth();
  console.log("logged in Status", loggedIn);
  return (
    <>
      <BrowserRouter>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/events" component={Event} />

          <Route
            exact
            path="/users/activate/:token"
            component={(props) => <Activate {...props} />}
          />
          <Route
            exact
            path="/users/password/reset/:token"
            component={(props) => <NewPassword {...props} />}
          />
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
          <Route exact path="/gallery" component={Gallery} />

          <Route exact path="/profile" component={Profile} />

          <Route exact path="/reset" component={ForgotPassword} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
