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

import { Container } from "react-bootstrap";
import {
	sendProductData,
	sendPaymentIntent,
	SendProductDataToStripe,
} from "../services/sendProductData";

import CheckoutForm from "./Payment";
import Cart from "./Cart";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const PUBLISHABLE_KEY =
	"pk_test_51JHQTXSHYqXBXKjvzgn9qtU1kcMDSRwJ7oiUpjkqsJobCfvp3iDptW78dFH0QgDphPm7AMHAPz99feBUMFVJDssG0064LL3Gvr";
const stripePromise = loadStripe(PUBLISHABLE_KEY);

function Functionstripe() {
	return (
		<>
			<Cart />
			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements>
		</>
	);
}

export default Functionstripe;
