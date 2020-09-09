import React from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "../../components/PrivateRoute.component";
import Contact from "../../components/FormUI/contactForm.component";
import MTSE from "../../components/FormUI/MTSE";
import PuzzleRace from "../../components/FormUI/puzzleRace";
import Rangotsav from "../../components/FormUI/rangotsav";

function Forms() {
  const { path } = useRouteMatch();

  console.log(path);
  return (
    <section style={{ marginTop: "80px" }}>
      <Switch>
        <Route path={`${path}/contact`} render={() => <Contact />} />
        <PrivateRoute path={`${path}/mtse`} component={MTSE} />
        <PrivateRoute path={`${path}/puzzlerace`} component={PuzzleRace} />
        <PrivateRoute path={`${path}/rangotsav`} component={Rangotsav} />
      </Switch>
    </section>
  );
}

export default Forms;
