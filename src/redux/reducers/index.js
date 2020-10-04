import { combineReducers } from 'redux'
import { authentication, registration, getUser } from './auth.reducers'
import { alert } from './alert.reducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  getUser
})

export default rootReducer
