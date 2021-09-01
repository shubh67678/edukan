import React from "react";
import { useState, useEffect } from "react";

function useCart(productId) {
	const [test, setTest] = useState();

	const setTestData = () => {
		setTest(productId);
	};

	useEffect(() => {
		setTest(productId);
		console.log(productId);
	});

	return test;
}
export default useCart;
