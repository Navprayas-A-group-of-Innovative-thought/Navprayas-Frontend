import axios from "axios";
import { url } from "../api";
import { payementConstant } from "../constants/payements.constant";
import { authHeader } from "../../_helpers/auth-header";

export const payementActions = {
  pay,
};

function isDate(val) {
  // Cross realm comptatible
  return Object.prototype.toString.call(val) === "[object Date]";
}

function isObj(val) {
  return typeof val === "object";
}

function stringifyValue(val) {
  if (isObj(val) && !isDate(val)) {
    return JSON.stringify(val);
  } else {
    return val;
  }
}

function buildForm({ action, params }) {
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", action);
  //   form.setAttribute("target", target);

  Object.keys(params).forEach((key) => {
    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", key);
    input.setAttribute("value", stringifyValue(params[key]));
    form.appendChild(input);
  });

  return form;
}

function post(details) {
  const form = buildForm(details);
  document.body.appendChild(form);
  form.submit();
  form.remove();
}

function pay() {
  return (dispatch) => {
    dispatch(request());

    const config = {
      headers: authHeader(),
    };

    console.log(config);
    // console.log(query);
    axios
      .post(`${url}/paytm/payment?formId=MTSE`, config)
      .then((res) => {
        console.log(res.data.data);
        var details = {
          action: `https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${res.data.data.mid}&orderId=${res.data.data.orderId}`,
          params: res.data,
        };

        post(details);
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure());
      });
  };

  function request() {
    return { type: payementConstant.PAYEMENT_REQUEST };
  }
  function success() {
    return { type: payementConstant.PAYEMENT_SUCCESS };
  }
  function failure() {
    return { type: payementConstant.PAYEMENT_FAILURE };
  }
}
