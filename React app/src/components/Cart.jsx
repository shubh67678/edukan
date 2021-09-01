import React from "react";
import { useEffect, useState, useContext } from "react";
import { CartContent } from "../CartDetails";

import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import { Route, Switch, Link } from "react-router-dom";

import Product from "../components/Product";
import { getAllProducts } from "../services/productService";

function useForceUpdate() {
	const [value, setValue] = useState(0); // integer state
	return () => setValue((value) => value + 1); // update the state to force render
}
export default function Cart() {
	const forceUpdate = useForceUpdate();
	const [Cart, addToCart, setCart] = useContext(CartContent);
	const [productsInCart, setProductsInCarts] = useState([]);
	const [testConditionalRefresh, testSet] = useState(0);

	const findTotalCost = () => {
		var totalCost = 0;
		for (var i = 0; i < productsInCart.length; i++) {
			totalCost +=
				productsInCart[i].quantity *
				productsInCart[i].product_details.price;
		}
		return totalCost;
	};

	const alterQuantityOfProduct = (
		productToAlterQuantity,
		newQuantityOfProduct
	) => {
		console.log(productToAlterQuantity, newQuantityOfProduct);
		const copyState = Cart;
		if (newQuantityOfProduct < 0) {
			newQuantityOfProduct = 0;
		}

		for (var i = 0; i < copyState.products.length; i++) {
			if (copyState.products[i]["id"] == productToAlterQuantity["id"]) {
				copyState.products[i]["quantity"] = newQuantityOfProduct;
				break;
			}
		}
		setCart(copyState);
		forceUpdate();
	};

	useEffect(() => {
		setProductsInCarts(Cart["products"]);
	}, [setCart]);
	useEffect(() => {
		console.log("changed", testConditionalRefresh);
	}, [Cart]);

	return (
		<React.Fragment>
			<Button onClick={() => testSet(testConditionalRefresh + 1)}>
				test
			</Button>
			<p>{testConditionalRefresh}</p>
			<Table responsive="sm">
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Sub-Total</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					{productsInCart.map((cur_product, index) => (
						<tr key={cur_product.id}>
							<td>{cur_product.product_details.name}</td>
							<td>{cur_product.product_details.price}</td>
							<td>{cur_product.quantity}</td>
							<td>
								{cur_product.product_details.price *
									cur_product.quantity}
							</td>
							<td>
								<Button
									variant="outline-dark"
									onClick={() =>
										alterQuantityOfProduct(
											cur_product,
											cur_product.quantity - 1
										)
									}>
									-
								</Button>
								<Button
									variant="outline-dark"
									onClick={() =>
										alterQuantityOfProduct(
											cur_product,
											cur_product.quantity + 1
										)
									}>
									+
								</Button>
							</td>
						</tr>
					))}
					<tr>
						<td></td>
						<td></td>
						<td>
							<h5>Total</h5>
						</td>
						<td>{findTotalCost()}</td>
					</tr>
				</tbody>
			</Table>
		</React.Fragment>
	);
}
