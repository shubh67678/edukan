import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";
// import Container from "react-bootstrap/Container";
import { Container, Row, Col, Table } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Grid from "react-bootstrap/Grid";
// import Col from "react-bootstrap/Col";
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
	render() {
		return (
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
								<Button variant="outline-dark">Edit</Button>{" "}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}
}

export default Products;
