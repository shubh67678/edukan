import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/user/";

export function sendSignUpData(SignUpData) {
	return http.post(apiEndpoint, SignUpData);
}
