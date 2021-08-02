import React, { useState, useContext } from "react";
import { StrictMode } from "react";

const productsInCart = {
	products: [
		{
			id: 2,
			quantity: 1,
		},
		{
			id: 4,
			quantity: 2,
		},
	],
};

export const CartContent = React.createContext();

export const Store = ({ children }) => {
	const [state, setState] = useState(productsInCart);

	const addProductToCartList = (productId) => {
		productId = parseInt(productId, 10); //convert to int
		console.log(productId);
		const copyState = state;
		copyState.products.push({ id: productId });
		setState(copyState);
	};

	return (
		<CartContent.Provider value={[state, addProductToCartList]}>
			{children}
		</CartContent.Provider>
	);
};
