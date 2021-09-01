import React from "react";
import { Component } from "react";
import OrderEditForm from "./OrderEditForm";
import { getOrderById, editOrder } from "../services/orderService";

class CallOrderEdit extends Component {
	state = {};
	async componentDidMount() {
		const auth = {
			auth: {
				username: "admin",
				password: "password123",
			},
		};
		const order_id = this.props.match.params.id;
		const request = await getOrderById(order_id, auth);
		this.setState({ order: request.data });
		console.log(this.state.order);
	}
	render() {
		return this.state.order ? (
			<OrderEditForm
				preloadedValues={this.state.order}
				order_id={this.state.order.id}
			/>
		) : (
			<div>Loading...</div>
		);
	}
}

export default CallOrderEdit;
