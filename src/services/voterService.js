import http from "./httpService";
import config from "../config.json";

export function getVotersCountIn(unit) {
  return http.get(config.url + "/voters/total-in/" + unit);
}
