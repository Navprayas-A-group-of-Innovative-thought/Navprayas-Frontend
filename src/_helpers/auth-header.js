import { getCookie } from "./auth";

export function authHeader() {
  // return authorization header with jwt token
  const token = getCookie("token");

  if (token) {
    return {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    };
  } else {
    return {};
  }
}
