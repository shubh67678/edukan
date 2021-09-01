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

export function getOrderById(OrderId, auth) {
	console.log(OrderId);
	return http.get(getOrderUrlById(OrderId), auth);
}

export function getAllOrders(auth) {
	return http.get(apiEndpoint, auth);
}

export function deleteOrder(OrderId, auth) {
	return http.delete(getOrderUrlById(OrderId, auth));
}

export function editOrder(toEditOrder, order_id) {
	return http.put(apiEndpoint + "/" + order_id + "/", toEditOrder);
}
