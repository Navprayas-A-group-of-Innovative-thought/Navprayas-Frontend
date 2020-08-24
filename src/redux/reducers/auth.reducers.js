import * as ActionsTypes from "../constants/constant";

const initialState = {
  isAuthenticated: null,
  isLoading: false,
  user: null,
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.REGISTER_REQUEST:
  }
}
