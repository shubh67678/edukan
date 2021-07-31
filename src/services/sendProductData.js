import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/stripe_payment/";

//send data to payment endpoint

export function sendProductData(payment_details) {
	const paymentId = payment_details.id;
	const req_body = {
		payment_method_id: paymentId,
	};
	return http.post(apiEndpoint, req_body);
}

export function sendPaymentIntent(paymentIntent) {
	const req_body = {
		payment_intent_id: paymentIntent.id,
	};
	return http.post(apiEndpoint, req_body);
}
