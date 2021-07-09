import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import { Route, Switch, Link } from "react-router-dom";

import Product from "../components/Product";
import { getAllProducts } from "../services/productService";
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

	async componentDidMount() {
		//gets all the products and sets the state
		const request = await getAllProducts();
		this.setState({ products: request.data });
	}
	render() {
		return (
			<React.Fragment>
				<Link to="/create_product">
					<Button>Add</Button>
				</Link>

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
									<Link to={"/product_edit_form/" + p.id}>
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
