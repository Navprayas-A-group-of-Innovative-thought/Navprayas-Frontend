import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import ContactUS from "../../components/FormUI/contactForm.component";

const Forms = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${path}/contact`} component={ContactUS} />
      </Switch>
    </>
  );
};

export default Forms;
