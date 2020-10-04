import { userConstants } from '../constants/constant'

export function registration(state = { isLoading: false }, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { ...state, isLoading: true }
    case userConstants.REGISTER_SUCCESS:
      return { ...state, isLoading: false }
    case userConstants.REGISTER_FAILURE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

// let user = JSON.parse(localStorage.getItem("user"));
// const initialState = user ? { loggedIn: true, user } : {};
const initialState = {
  isLoading: false,
  loggedIn: false
}

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        loggedIn: false
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        isLoading: false,
        loggedIn: true
      }
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        loggedIn: false
      }
    case userConstants.LOGOUT:
      return {
        ...state,
        isLoading: false,
        loggedIn: false
      }
    default:
      return state
  }
}

export function getUser(state = { isLoading: false, user: null }, action) {
  switch (action.type) {
    case userConstants.GETUSER_REQUEST:
      return { ...state, isLoading: true, user: null }
    case userConstants.GETUSER_SUCCESS:
      return { ...state, isLoading: false, user: action.user }
    case userConstants.GETUSER_FAILURE:
      return { ...state, isLoading: false, user: null }
    case userConstants.PROFILE_UPDATE_REQUEST:
      return { ...state, isLoading: true, user: null }
    case userConstants.PROFILE_UPDATE_SUCCESS:
      return { ...state, isLoading: true, user: action.user }
    case userConstants.PROFILE_UPDATE_FAILURE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
