import React, { useState, useContext } from "react";
import { StrictMode } from "react";

const productsInCart = {
	products: [],
};

export const CartContent = React.createContext();

export const CartDetails = ({ children }) => {
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
