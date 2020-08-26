import React from "react";
import { Alert } from "reactstrap";

const AlertModal = (props) => (
  <Alert
    color={props.color}
    isOpen={props.isOpen}
    toggle={() => props.toggle()}
  >
    {props.children}
  </Alert>
);

export default AlertModal;
