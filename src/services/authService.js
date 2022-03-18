import http from "./httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode";

const token = getJwt();
if (token) http.setJwt(token);

export async function register(monitorUser) {
  const { data: token } = await http.post(config.url + "/register/", monitorUser);
  localStorage.setItem("token", token);
  http.setJwt(token);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

function getJwt() {
  return localStorage.getItem("token");
}

const auth = {
  register,
  logout,
  getCurrentUser,
};

export default auth;
