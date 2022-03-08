import http from "./httpService";
import config from "../config.json";

export function getAllDepartments() {
  return http.get(config.url + "/departments/");
}
