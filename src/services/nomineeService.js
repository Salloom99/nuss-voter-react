import http from "./httpService";
import config from "../config.json";

function getNomineesIn(unit, sort = "name") {
  if (sort === "name")
    return http.get(config.url + "/nominees/", {
      params: { unit, ordering: "name" },
    });
  else
    return http.get(config.url + "/nominees/", {
      params: { unit, ordering: "-votes_count" },
    });
}

function addNomineeTo(name, unit) {
  return http.post(config.url + "/nominees/", { name, unit });
}

function addNomineesTo(names, unit) {
  const nominees = names.map((name) => {
    return { name, unit };
  });
  return http.post(config.url + "/nominees/", nominees);
}

function deleteNominee(nomineeId) {
  return http.delete(config.url + "/nominees/" + nomineeId);
}

function updateNomineeName(nomineeId, name) {
  return http.put(config.url + "/nominees/" + nomineeId, { name });
}

export { getNomineesIn, addNomineesTo, deleteNominee, updateNomineeName };
