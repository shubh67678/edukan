import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Product = () => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src="https://m.media-amazon.com/images/I/41Leu3gBUFL.jpg"
			/>
			<Card.Body>
				<Card.Title>Shoes</Card.Title>
				<Card.Text className="text-secondary">
					This is the description of the shoes As a sample of the data
					we will get
				</Card.Text>
				<Container fluid="sm">
					<Row>
						<Col>
							<Button variant="primary" size="lg">
								Buy
							</Button>
						</Col>
						<Col className="mt-2">
							<h4>Rs 20000</h4>
						</Col>
					</Row>
				</Container>
			</Card.Body>
		</Card>
	);
};

export default Product;
