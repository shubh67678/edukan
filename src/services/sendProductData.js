import http from "./httpService";
import { apiUrl } from "../config.json";
import { useEffect, useState, useContext } from "react";
import { CartContent } from "../Store";

const apiEndpoint = apiUrl + "/stripe_payment/";

//send data to payment endpoint

export function sendProductData(payment_details, cart_info) {
	console.log(cart_info);
	const paymentId = payment_details.id;
	const req_body = {
		payment_method_id: paymentId,
		cart_info: cart_info,
	};
	return http.post(apiEndpoint, req_body);
}

export function sendPaymentIntent(paymentIntent, cart_info) {
	const req_body = {
		payment_intent_id: paymentIntent.id,
		cart_info: cart_info,
	};
	return http.post(apiEndpoint, req_body);
}

export function SendProductDataToStripe(payment_details) {
	// const [Cart, addToCart] = useContext(CartContent);

	// const paymentId = payment_details.id;
	const req_body = {
		payment_method_id: payment_details.id,
		// cart_info: Cart,
	};
	return http.post(apiEndpoint, req_body);
}
