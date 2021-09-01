import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/product";
/*
	{
	"url": "http://127.0.0.1:8000/product/7/",
	"name": "brick",
	"company": 1,
	"price": 100,
	"id": 7
	} 
*/
function getProductUrlById(id) {
	//add id to endpoint
	return `${apiEndpoint}/${id}`;
}

export function getProductById(productId) {
	return http.get(getProductUrlById(productId));
}

export function getAllProducts() {
	return http.get(apiEndpoint);
}

export function deleteProduct(productId) {
	return http.delete(getProductUrlById(productId));
}

export function createProduct(toCreateProduct) {
	return http.post(apiEndpoint + "/", toCreateProduct);
}

export function editProduct(toEditProduct, product_id) {
	return http.put(apiEndpoint + "/" + product_id + "/", toEditProduct);
}
