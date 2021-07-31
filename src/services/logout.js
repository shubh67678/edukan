// import React, { useState, useEffect } from "react";
import http from "./httpService";
import axiosInstance from "./axiosData";

export function LogOut() {
	//this token blacklist can no longer be used
	const ans = blacklistToken();
	return <div>Logout</div>;
}

export function blacklistToken() {
	const response = http.post("/logout/blacklist/", {
		refresh_token: localStorage.getItem("refresh_token"),
	});
	localStorage.removeItem("access_token");
	localStorage.removeItem("refresh_token");
	axiosInstance.defaults.headers["Authorization"] = null;

	return response;
}
