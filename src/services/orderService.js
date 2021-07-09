import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/order";

/*{
    "status": "pending",
    "payment": 33,
    "products": [
        1
    ]
} */

function getOrderUrlById(id) {
	//add id to endpoint
	return `${apiEndpoint}/${id}`;
}

export function getOrderById(OrderId) {
	return http.get(getOrderUrlById(OrderId));
}

export function getAllOrders(auth) {
	return http.get(apiEndpoint, auth);
}

export function deleteOrder(OrderId) {
	return http.delete(getOrderUrlById(OrderId));
}

export function saveOrder(toSaveOrder) {
	return http.post(apiEndpoint, toSaveOrder);
}
