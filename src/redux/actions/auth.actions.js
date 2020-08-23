import axios from "axio";

import * as ActionTypes from "../constants/constant";
import { url } from "../api";

// Action for Register new user
export const register = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  dob,
  gender,
}) => (dispatch) => {
  //Header
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Request Body
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    dob,
    gender,
  });
  axios
    .post(url + "/signup", body, config)
    .then((res) =>
      dispatch({
        type: ActionTypes.REGISTER_REQUEST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.REGISTER_FAILED,
        payload: err.response.data,
      })
    );
};
