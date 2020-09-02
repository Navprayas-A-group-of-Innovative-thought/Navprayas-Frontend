import { alertConstant } from "../constants/alertConstants";

export const alertActions = {
  success,
  error,
  clear,
};

function success(message) {
  return { type: alertConstant.SUCCESS, message };
}

function error(message) {
  return { type: alertConstant.ERROR, message };
}

function clear() {
  return { type: alertConstant.CLEAR };
}
