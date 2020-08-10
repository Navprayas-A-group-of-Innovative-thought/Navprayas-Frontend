// import you constants from constant folder
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
} from "../constants/sample.constant";

/* 
action may contain these fields
type : | type of action you want to do
payload : any | data that is passwd
loading : boolean |it may take time for loading
error : error 
*/

function signInReducer(state = {}, action) {
  switch (action.type) {
    // if user requests for signin it should loading until it gets signed in or error results
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    // if success in signin make loading false and pass data into userInfo that you got from API
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    // if fails set loading false and pass the payload containing error in error
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    // if some other request just simply return the current state
    default:
      return state;
  }
}

export { signInReducer };
