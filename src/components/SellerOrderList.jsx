import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { getAllOrders } from "../services/orderService";
import axios from "axios";

class Products extends Component {
	state = { orders: [] };

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
								<Link to={"/order_edit_form/" + order.id}>
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
