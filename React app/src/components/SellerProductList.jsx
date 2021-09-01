import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import { Route, Switch, Link } from "react-router-dom";

import Product from "../components/Product";
import { getAllProducts } from "../services/productService";
class Products extends Component {
	state = {
		products: [],
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
