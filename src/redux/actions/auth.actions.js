import axios from "axios";
import { userConstants } from "../constants/constant";
import { url } from "../api";
import { alertActions } from "./alert.actions";
// import { History } from "../../_helpers/history";

export const userActions = {
  login,
  logout,
  register,
};

// Action creator for Login

function login(email, password) {
  return (dispatch) => {
    console.log("Login", email, password);
    dispatch(request());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email: email,
      password: password,
    });

    console.log("body", body);
    // requesting to api
    axios
      .post(`${url}/login`, body, config)
      .then((res) => {
        console.log("Login action Creator", res);
        dispatch(success());
        dispatch(alertActions.success("Log in Success"));
      })
      .catch((err) => {
        console.log("Login action Creator", err);
        dispatch(failure("Auth Error"));
        dispatch(alertActions.error("Log in Error"));
      });
  };

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }
  function success() {
    return { type: userConstants.LOGIN_SUCCESS };
  }
  function failure() {
    return { type: userConstants.LOGIN_FAILURE };
  }
}

// logout function
function logout() {
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request());
    console.log("Registering Users", user);

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      dob,
      gender,
    } = user;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

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
      .post(`${url}/signup`, body, config)
      .then((res) => {
        console.log("Register Action Creator", res);
        dispatch(success());
        dispatch(alertActions.success(res.data.responseData));
      })
      .catch((err) => {
        console.log("Register Action Creator");
        console.log(err);
        dispatch(failure());
        dispatch(alertActions.error("Registeration Error"));
      });
  };

  function request() {
    return { type: userConstants.REGISTER_REQUEST };
  }
  function success() {
    return { type: userConstants.REGISTER_SUCCESS };
  }
  function failure() {
    return { type: userConstants.REGISTER_FAILURE };
  }
}
