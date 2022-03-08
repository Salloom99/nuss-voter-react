import http from "./httpService";
import config from "../config.json";

function getNomineesIn(unit) {
  return http.get(config.url + "/nominees/", {
    params: { unit, ordering: "-votes_count" },
  });
}

function addNomineeTo(name, unit) {
  return http.post(config.url + "/nominees/", { name, unit });
}

function deleteNominee(nomineeId) {
  return http.delete(config.url + "/nominees/" + nomineeId);
}

function updateNomineeName(nomineeId, name) {
  return http.put(config.url + "/nominees/" + nomineeId, { name });
}

export { getNomineesIn, addNomineeTo, deleteNominee, updateNomineeName };
