import React, { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//product is a stateless functional component
//used to display data only

//{product} is decomposition so that we dont have to write props...
const Product = ({ product }) => {
	return (
		//Card used from the Card in Bootstrap
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
							<Link to={"/product/" + product.id}>
								<Button variant="primary" size="lg">
									Buy
								</Button>
							</Link>
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
