import React from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import Contact from "../../components/FormUI/contactForm.component";

function Forms() {
  const { path } = useRouteMatch();

  console.log(path);
  return (
    <section style={{ marginTop: "80px" }}>
      <Link to={`${path}/contact`}>Contact</Link>
      <Contact />
      <Switch>
        <Route path={`${path}/contact`} render={() => <Contact />} />
      </Switch>
    </section>
  );
}

export default Forms;
