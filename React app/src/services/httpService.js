import axios from "axios";
import axiosInstance from "./axiosData";

export default {
	get: axiosInstance.get,
	post: axiosInstance.post,
	put: axiosInstance.put,
	delete: axiosInstance.delete,
	defaults: axiosInstance.defaults,
};
