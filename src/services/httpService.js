import axios from "axios";
import axiosInstance from "./axiosData";

export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
	defaults: axios.defaults,
};
