import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Product = ({ product }) => {
	// console.log(product);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src="https://m.media-amazon.com/images/I/41Leu3gBUFL.jpg"
			/>
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
				<Card.Text className="text-secondary">
					{product.description}
				</Card.Text>
				<Container fluid="sm">
					<Row>
						<Col>
							<Button variant="primary" size="lg">
								Buy
							</Button>
						</Col>
						<Col className="mt-2">
							<h5>Rs {product.price}</h5>
						</Col>
					</Row>
				</Container>
			</Card.Body>
		</Card>
	);
};

export default Product;
