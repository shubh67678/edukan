import http from "./httpService";
import { apiUrl } from "../config.json";
import axiosInstance from "./axiosData";
import { useHistory } from "react-router";

const apiEndpoint = apiUrl + "/api/" + "token/";

function getProductUrlById(id) {
	//add id to endpoint
	return `${apiEndpoint}/${id}`;
}

export function sendLoginData(loginData) {
	return http.post(apiEndpoint, loginData);
}

export async function loginHandel(loginData) {
	// const history = useHistory();
	var res = await sendLoginData(loginData);

	localStorage.setItem("access_token", res.data.access);
	localStorage.setItem("refresh_token", res.data.refresh);
	axiosInstance.defaults.headers["Authorization"] =
		"JWT " + localStorage.getItem("access_token");

	return res;
}
