import { alertConstants } from '../constants/alertConstants'

export function alert(state = { show: false, type: '', message: '' }, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        ...state,
        type: 'success',
        show: true,
        message: action.message
      }
    case alertConstants.ERROR:
      return {
        ...state,
        type: 'danger',
        show: true,
        message: action.message
      }
    case alertConstants.CLEAR:
      return { ...state, show: false }
    default:
      return state
  }
}
