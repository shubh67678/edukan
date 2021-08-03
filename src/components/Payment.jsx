import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
	CardElement,
	Elements,
	ElementsConsumer,
	PaymentElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState, useContext } from "react";
import { CartContent } from "../CartDetails";

import { Container } from "react-bootstrap";
import {
	sendProductData,
	sendPaymentIntent,
	SendProductDataToStripe,
} from "../services/sendProductData";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleServerResponse = async (response, stripe, Cart) => {
	const notify = () => toast.success("Order placed successfully!");

	if (response.data["error"]) {
		// Show error from server on payment form
	} else if (response.data["requires_action"]) {
		// Use Stripe.js to handle the required card action
		const { error: errorAction, paymentIntent } =
			await stripe.handleCardAction(
				response.data["payment_intent_client_secret"]
			);

		if (errorAction) {
			// Show error from Stripe.js in payment form
		} else {
			// The card action has been handled
			// The PaymentIntent can be confirmed again on the server

			const payment_request_response = await sendPaymentIntent(
				paymentIntent,
				Cart
			);
			console.log(payment_request_response);
			handleServerResponse(payment_request_response);
		}
	} else {
		// Show success message
		notify();
	}
};

export default function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();
	const [Cart, addToCart] = useContext(CartContent);

	const handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const cardElement = elements.getElement(CardElement);

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
		});

		if (error) {
			console.log("[error]", error);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
			const response = await sendProductData(paymentMethod, Cart);
			console.log(response);

			handleServerResponse(response, stripe, Cart);
			//4000 0000 0000 3220
			//4242 4242 4242 4242
		}
	};

	return (
		<Container style={{ width: "40rem" }}>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="form-label">Card Details</label>
					<CardElement />
				</div>
				<div className="mb-3">
					<button
						type="submit"
						className="btn btn-dark"
						disabled={!stripe}>
						Pay
					</button>
				</div>
			</form>
		</Container>
	);
}
