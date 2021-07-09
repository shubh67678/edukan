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
import axios from "axios";

class Products extends Component {
	state = {
		products: [],
	};

	async componentDidMount() {
		const request = await axios.get(" http://127.0.0.1:8000/product/");
		this.setState({ products: request.data });
		console.log(this.state.products);
	}

	render() {
		return (
			<React.Fragment>
				<div className="container overflow-hidden">
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5">
						{this.state.products.map((p) => (
							<div className="col" key={p.id}>
								<Product key={p.id} product={p} />
							</div>
						))}
					</div>
				</div>
				{/* <Row>
					{this.state.products.map((p) => (
						<Product key={p.id} product={p} />
					))}
				</Row> */}
			</React.Fragment>
		);
	}
}

export default Products;
