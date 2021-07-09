import React, { Component } from "react";

import axios from "axios";

class EditProductSeller extends Component {
	state = {
		order: {},
	};
	async componentDidMount() {
		const request = await axios.get("order/" + this.props.match.params.id, {
			auth: {
				username: "admin",
				password: "password123",
			},
		});
		this.setState({ order: request.data });
		console.log(this.state.order);
	}
	render() {
		return (
			<p>
				order id: {this.state.order.id}
				<br />
				status: {this.state.order.status}
				<br />
				payment: {this.state.order.payment}
			</p>
		);
	}
}

export default EditProductSeller;
