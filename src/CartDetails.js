import React, { useState, useContext } from "react";
import { StrictMode } from "react";

const productsInCart = {
	products: [],
};

export const CartContent = React.createContext();

export const CartDetails = ({ children }) => {
	const [state, setState] = useState(productsInCart);

	const addProductToCartList = (toAddProductDetails) => {
		const toAddProductId = parseInt(toAddProductDetails["id"], 10); //convert to int
		// console.log(toAddProductDetails);
		const copyState = state;
		var incrementQuantity = false;

		for (var i = 0; i < copyState.products.length; i++) {
			if (copyState.products[i]["id"] == toAddProductId) {
				copyState.products[i]["quantity"] += 1;
				incrementQuantity = true;
			}
		}

		if (!incrementQuantity) {
			copyState.products.push({
				id: toAddProductId,
				product_details: toAddProductDetails,
				quantity: 1,
			});
		}
		setState(copyState);
	};

	return (
		<CartContent.Provider value={[state, addProductToCartList, setState]}>
			{children}
		</CartContent.Provider>
	);
};
