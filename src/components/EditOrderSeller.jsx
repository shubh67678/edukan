import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Route, Switch, Link } from "react-router-dom";

import axios from "axios";

class EditProductSeller extends Component {
	state = {
		order: {},
	};
	async componentDidMount() {
		const request = await axios.get(
			" http://127.0.0.1:8000/order/" + this.props.match.params.id,
			{
				auth: {
					username: "admin",
					password: "password123",
				},
			}
		);
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
