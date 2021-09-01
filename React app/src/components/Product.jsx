import React, { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//product is a stateless functional component
//used to display data only

//{product} is decomposition so that we dont have to write props...
const Product = ({ product }) => {
	const notify = () => toast.success("Order placed successfully!");

	return (
		<>
			{/* //Card used from the Card in Bootstrap */}
			<Card style={{ width: "18rem" }}>
				<Card.Img
					className="photo"
					variant="top"
					src={product.images[0]}
				/>
				<Card.Body>
					<Card.Title>{product.name}</Card.Title>

					<Card.Text className="text-secondary">
						{product.description}
					</Card.Text>
					<div class="d-flex justify-content-between">
						<div class="stats mt-2">
							<h5>Rs. {product.price}</h5>
						</div>
						<div class="stats mt-2"></div>
						<Link to={"/product/" + product.id}>
							<button
								class="ms-auto p-2 "
								type="submit"
								className="btn btn-dark btn-large md-1 shadow-sm">
								Buy
							</button>
						</Link>
					</div>
				</Card.Body>
			</Card>
			<ToastContainer />
		</>
	);
};

export default Product;
