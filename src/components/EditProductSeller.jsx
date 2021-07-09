import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Switch, Link } from "react-router-dom";

import axios from "axios";

class EditProductSeller extends Component {
	state = {
		product: {},
	};
	async componentDidMount() {
		const request = await axios.get(
			" http://127.0.0.1:8000/product/" + this.props.match.params.id
		);
		this.setState({ product: request.data });
		console.log(this.state.product);
	}
	render() {
		return (
			<div className="container overflow-hidden">
				<div className="row row-cols-1 row-cols-lg-2  gy-5 mt-5">
					<div className="col">
						<img
							class="img-fluid w-100"
							src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
							alt=""
						/>
					</div>
					<div className="container-fluid d-flex flex-column h-100">
						<div className="row">
							<h3>{this.state.product.name}</h3>
						</div>
						<div className="row">
							<h5>Rs. {this.state.product.price}</h5>
						</div>
						<div className="row ">
							<div className="text-muted">
								{this.state.product.description}
							</div>
						</div>

						<div className="row">
							<Link
								to={
									"/product_edit_form/" +
									this.props.match.params.id
								}>
								<button type="button" className="btn btn-dark">
									Edit
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default EditProductSeller;
