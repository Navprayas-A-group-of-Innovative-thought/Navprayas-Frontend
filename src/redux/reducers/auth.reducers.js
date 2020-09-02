import * as ActionsTypes from "../constants/constant";

const initialState = {
  isAuthenticated: null,
  isLoading: false,
  user: null,
  msg: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.REGISTER_REQUEST:
      return { ...state, isLoading: true, msg: action.payload };
  }
}
