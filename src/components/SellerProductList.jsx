import React, { Component } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";
// import Container from "react-bootstrap/Container";
import { Container, Row, Col, Table } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Grid from "react-bootstrap/Grid";
// import Col from "react-bootstrap/Col";
import { Route, Switch, Link } from "react-router-dom";

import Product from "../components/Product";

class Products extends Component {
	state = {
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
				name: "Mac book",
				description:
					" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
				price: 10000,
			},
			{
				id: 3,
				name: "Mac book",
				description:
					" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
				price: 10000,
			},
			{
				id: 4,
				name: "Mac book",
				description:
					" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
				price: 10000,
			},
			{
				id: 5,
				name: "Mac book",
				description:
					" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
				price: 10000,
			},
			{
				id: 6,
				name: "Mac book",
				description:
					" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
				price: 10000,
			},
		],
	};
	HandelAdd = async () => {
		const obj = {
			name: "first_product",
			company: "4",
			price: 100,
		};
		const request = await axios.post(
			" http://127.0.0.1:8000/product/",
			obj
		);
		console.log(request.data);
	};
	async componentDidMount() {
		const request = await axios.get(" http://127.0.0.1:8000/product/");
		this.setState({ products: request.data });
		console.log(this.state.products);
	}
	render() {
		return (
			<React.Fragment>
				<Button onClick={this.HandelAdd}>Add</Button>

				<Table responsive="sm">
					<thead>
						<tr>
							<th>No.</th>
							<th>Product</th>
							<th>Inventory</th>
							<th>Status</th>
							<th>Category</th>
							<th>Comments</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.state.products.map((p, index) => (
							<tr key={p.id}>
								<td>{index + 1}</td>
								<td>{p.name}</td>
								<td>{p.price}</td>
								<td>avaliable</td>
								<td>test</td>
								<td>Comments</td>
								<td>
									<Link to={"/edit_product_seller/" + p.id}>
										<Button variant="outline-dark">
											Edit
										</Button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</React.Fragment>
		);
	}
}

export default Products;
