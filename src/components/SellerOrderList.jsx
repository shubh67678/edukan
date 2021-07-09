import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";
// import Container from "react-bootstrap/Container";
import { Route, Switch, Link } from "react-router-dom";

import { Container, Row, Col, Table } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Grid from "react-bootstrap/Grid";
// import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import axios from "axios";

class Products extends Component {
	state = {
		orders: [
			{
				id: 1,
				status: "dispatched",
				products: [
					{
						id: 1,
						name: "Shoes",
						description:
							" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
						price: 100,
					},
					{
						id: 2,
						name: "Shoes",
						description:
							" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
						price: 100,
					},
				],
				address: {
					id: 1,
					street: "thos",
				},
				payment: 100,
				ordered_on: "may",
				delivered_on: "june",
			},
			{
				id: 2,
				status: "dispatched",
				products: [
					{
						id: 1,
						name: "Shoes",
						description:
							" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
						price: 100,
					},
					{
						id: 2,
						name: "Shoes",
						description:
							" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
						price: 100,
					},
				],
				address: {
					id: 1,
					street: "thos",
				},
				payment: 100,
				ordered_on: "may",
				delivered_on: "june",
			},
			{
				id: 3,
				status: "dispatched",
				products: [
					{
						id: 1,
						name: "Shoes",
						description:
							" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
						price: 100,
					},
					{
						id: 2,
						name: "Shoes",
						description:
							" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
						price: 100,
					},
				],
				address: {
					id: 1,
					street: "thos",
				},
				payment: 100,
				ordered_on: "may",
				delivered_on: "june",
			},
		],
	};
	async componentDidMount() {
		const request = await axios.get(" http://127.0.0.1:8000/order/", {
			auth: {
				username: "admin",
				password: "password123",
			},
		});
		this.setState({ orders: request.data });
		console.log(this.state.orders);
	}
	render() {
		return (
			<Table responsive="sm">
				<thead>
					<tr>
						<th>No.</th>
						<th>Order id</th>
						<th>Status</th>
						<th>Payment</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{this.state.orders.map((order, index) => (
						<tr key={order.id}>
							<td>{index + 1}</td>
							<td>{order.id}</td>
							<td>{order.status}</td>
							<td>{order.payment}</td>
							<td>
								<Link to={"/edit_order_seller/" + order.id}>
									<Button variant="outline-dark">Edit</Button>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}
}

export default Products;
