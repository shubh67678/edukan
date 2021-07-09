import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Route, Switch, Link } from "react-router-dom";

import NavDropdown from "react-bootstrap/NavDropdown";
const NavBar = () => {
	return (
		<Navbar variant="light" bg="light">
			<Container>
				<Navbar.Brand href="#">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link>
						<Link to="">Home</Link>
					</Nav.Link>

					<Nav.Link>
						<Link to="/products">Products</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/seller_order_list">SellerOrderList</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/seller_product_list">SellerProductList</Link>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
