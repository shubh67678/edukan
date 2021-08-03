import React from "react";
import { useEffect, useState, useContext } from "react";
import { CartContent } from "../CartDetails";

import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import { Route, Switch, Link } from "react-router-dom";

import Product from "../components/Product";
import { getAllProducts } from "../services/productService";

export default function Cart() {
	const [Cart, addToCart] = useContext(CartContent);
	const [productsInCart, setProductsInCarts] = useState([]);

	const findTotalCost = () => {
		var totalCost = 0;
		for (var i = 0; i < productsInCart.length; i++) {
			totalCost +=
				productsInCart[i].quantity *
				productsInCart[i].product_details.price;
		}
		return totalCost;
	};

	useEffect(() => {
		setProductsInCarts(Cart["products"]);
	}, [Cart]);

	console.log(Cart);
	return (
		<React.Fragment>
			<Table responsive="sm">
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Sub-Total</th>
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
