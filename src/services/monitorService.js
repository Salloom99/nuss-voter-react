import http from "./httpService";
import config from "../config.json";

function register(monitorUser) {
  return http.post(config.url + "/register/", monitorUser );
}


export { register };
