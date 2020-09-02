import { combineReducers } from "redux";
import { authentication, registration } from "./auth.reducers";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
});

export default rootReducer;
