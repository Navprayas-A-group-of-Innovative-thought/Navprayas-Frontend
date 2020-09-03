import { getCookie } from "./auth";

export function authHeader() {
  // return authorization header with jwt token
  const token = getCookie("token");

  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}
