import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ProductDetail extends Component {
	state = {
		product: {
			id: 1,
			name: "Shoes",
			description:
				" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi perspiciatis quisquam quam molestias ratione libero saepe. Soluta placeat temporibus excepturi architecto, dolorum ipsa laboriosam, porro magnam, hic aut quaerat.",
			price: 100,
		},
	};
	render() {
		return (
			<div className="container overflow-hidden">
				<div className="row row-cols-1 row-cols-lg-2  gy-5">
					<div className="col bg-primary"> </div>
					<div className="col bg-secondary"> </div>
				</div>
			</div>
		);
	}
}

export default ProductDetail;
