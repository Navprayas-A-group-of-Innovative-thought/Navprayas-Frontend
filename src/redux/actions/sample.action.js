import axios from "axios";
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from "../constants/sample.constant";

const signin = (email, password) => async (dispatch) => {
    dispatch({type:USER_SIGNIN_REQUEST, payload : {email, password} });
  try {
    const { data } = await axios.post(`/api/users/signin`, {
        email : email,
        password : password
    });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });

  } catch (err) {
    dispatch({type:USER_SIGNIN_FAIL, payload : err.message });
  }
};


export { signin };