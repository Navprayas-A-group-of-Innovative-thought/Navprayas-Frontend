import { userConstants } from "../constants/constant";

export function registration(state = { isLoading: false }, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case userConstants.REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case userConstants.REGISTER_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

// let user = JSON.parse(localStorage.getItem("user"));
// const initialState = user ? { loggedIn: true, user } : {};
const initialState = {
  isLoading: false,
  user: null,
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: null,
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        isLoading: false,
        user: null,
      };
    default:
      return state;
  }
}
