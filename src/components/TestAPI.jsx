import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
	CardElement,
	Elements,
	ElementsConsumer,
	PaymentElement,
} from "@stripe/react-stripe-js";
import { Container } from "react-bootstrap";
import {
	sendProductData,
	sendPaymentIntent,
	SendProductDataToStripe,
} from "../services/sendProductData";

class CheckoutForm extends React.Component {
	constructor() {
		super();
	}

	// handelServerResponse = async (response) => {
	// 	console.log(response);

	// 	var data = response.data;

	// 	if (data["error"]) {
	// 		//show error
	// 	} else if (data["requires_action"]) {
	// 		stripe.handleCardAction(data["payment_intent_client_secret"]);
	// 		this.handleSubmit({ stripe, elements });
	// 	} else {
	// 		console.log("scusses");
	// 	}
	// };
	handleServerResponse = async (response, stripe, paymentMethod) => {
		console.log(response);
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

				const payment_request_response = await sendProductData(
					paymentMethod
				);
				console.log(payment_request_response);
			}
		} else {
			// Show success message
		}
	};

	handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault();

		const { stripe, elements } = this.props;
		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const cardElement = elements.getElement(CardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
		});

		if (error) {
			console.log("[error]", error);
		} else {
			const response = await SendProductDataToStripe(paymentMethod);
			console.log(response);
			if (response.data["requires_action"]) {
				console.log(response);
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

						const payment_request_response =
							await sendPaymentIntent(paymentIntent);
						console.log(payment_request_response);
					}
				} else {
					// Show success message
				}
			}
		}
	};

	render() {
		const { stripe, elements } = this.props;
		return (
			<Container style={{ width: "40rem" }}>
				<form onSubmit={this.handleSubmit}>
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
}

const InjectedCheckoutForm = () => {
	return (
		<ElementsConsumer>
			{({ elements, stripe }) => (
				<CheckoutForm elements={elements} stripe={stripe} />
			)}
		</ElementsConsumer>
	);
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const PUBLISHABLE_KEY =
	"pk_test_51JHQTXSHYqXBXKjvzgn9qtU1kcMDSRwJ7oiUpjkqsJobCfvp3iDptW78dFH0QgDphPm7AMHAPz99feBUMFVJDssG0064LL3Gvr";
const stripePromise = loadStripe(PUBLISHABLE_KEY);

const Functionstripe = () => {
	return (
		<Elements stripe={stripePromise}>
			<InjectedCheckoutForm />
		</Elements>
	);
};

export default Functionstripe;
