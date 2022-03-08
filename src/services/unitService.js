import http from "./httpService";
import config from "../config.json";

function getUnitsIn(department) {
  return http.get(config.url + "/units", {params: {department}});
}


function getUnit(unitId) {
  return http.get(config.url + "/units/" + unitId);
}

function updateUnitState(unitId, state) {
  return http.put(config.url + "/units/" + unitId, { state });
}

export { getUnitsIn, getUnit, updateUnitState };
