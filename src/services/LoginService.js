import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/login/";

function getProductUrlById(id) {
	//add id to endpoint
	return `${apiEndpoint}/${id}`;
}

export function sendLoginData(loginData) {
	return http.post(apiEndpoint, loginData);
}
