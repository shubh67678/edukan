import React, { Component } from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LogOut } from "../services/logout";

const NavBar = () => {
	return (
		<Navbar variant="light" bg="light">
			<Container>
				<Navbar.Brand href="#">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={Link} to="#">
						Home
					</Nav.Link>

					<Nav.Link as={Link} to="/products">
						Products
					</Nav.Link>

					<Nav.Link as={Link} to="/seller_order_list">
						SellerOrderList
					</Nav.Link>
					<Nav.Link as={Link} to="/seller_product_list">
						SellerProductList
					</Nav.Link>
					<Nav.Link as={Link} to="/login">
						Login
					</Nav.Link>
					<Nav.Link as={Link} to="/signup">
						SignUp
					</Nav.Link>
					<Nav.Link as={Link} to="/payment">
						Pay
					</Nav.Link>

					<Button onClick={LogOut}>Logout</Button>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
