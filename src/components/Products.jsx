import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";
// import Container from "react-bootstrap/Container";
import { Container, Row, Col } from "react-bootstrap";
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
			<React.Fragment>
				<div className="container overflow-hidden">
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5">
						{this.state.products.map((p) => (
							<div className="col">
								<Product key={p.id} product={p} />
							</div>
						))}
					</div>
				</div>
				{/* <Row>
					{this.state.products.map((p) => (
						<Product key={p.id} product={p} />
					))}

					<Product product={this.state.products[0]} />
					<Product product={this.state.products[0]} />
					<Product product={this.state.products[0]} />
					<Product product={this.state.products[0]} />
					<Product product={this.state.products[0]} />
					<Product product={this.state.products[0]} />
				</Row> */}
			</React.Fragment>
		);
	}
}

export default Products;
