import React, { Component } from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LogOut } from "../services/logout";
import { CartContent } from "../CartDetails";
import { useContext } from "react";
import { Cart } from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
	const [test, setTest] = useContext(CartContent);
	const printCart = () => {
		console.log(test);
	};
	const loggedIn = false;

	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">EDukan</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="m-auto">
						<Nav.Link as={Link} to="#">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/products">
							Products
						</Nav.Link>
						<Nav.Link as={Link} to="/seller_order_list">
							Orders
						</Nav.Link>
						<Nav.Link as={Link} to="/seller_product_list">
							EditProducts
						</Nav.Link>
						<Nav.Link as={Link} to="/Cart">
							Cart
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link as={Link} to="/login">
							Login
						</Nav.Link>
						{loggedIn ? (
							<Button variant="outline-dark" onClick={LogOut}>
								Logout
							</Button>
						) : (
							<Link to="/signup">
								<Button variant="outline-dark">SignUp</Button>
							</Link>
						)}
						<Button variant="outline-dark" onClick={printCart}>
							printCart
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
// <>
// 	<Navbar expand="lg" variant="light">
// 		<Container>
// 			<Navbar.Brand href="#">EDukan</Navbar.Brand>
// 		</Container>
// 		<Container>
// 			<Nav className="m-auto">
// <Nav.Link as={Link} to="#">
// 	Home
// </Nav.Link>
// <Nav.Link as={Link} to="/products">
// 	Products
// </Nav.Link>
// <Nav.Link as={Link} to="/seller_order_list">
// 	Orders
// </Nav.Link>
// <Nav.Link as={Link} to="/seller_product_list">
// 	EditProducts
// </Nav.Link>
// 			</Nav>
// 		</Container>
// 		<Container>
// 			<Nav className="mr-auto">
// <Nav.Link as={Link} to="/login">
// 	Login
// </Nav.Link>
// <NacBtnLink to="/signup" variant="dark">
// 	SignUp
// </NacBtnLink>
// <Link to="/signup">
// 	<Button variant="dark">SignUp</Button>
// </Link>
// <Button variant="dark" onClick={LogOut}>
// 	Logout
// </Button>
// 			</Nav>
// 		</Container>
// 	</Navbar>
// </>

// <Navbar variant="light" bg="light">
// 	<Container>
// 		<Navbar.Brand href="#">Navbar</Navbar.Brand>
// 		<Nav className="me-auto">
// 			<Nav.Link as={Link} to="#">
// 				Home
// 			</Nav.Link>
// 			<Nav.Link as={Link} to="/products">
// 				Products
// 			</Nav.Link>

// 			<Nav.Link as={Link} to="/seller_order_list">
// 				SellerOrderList
// 			</Nav.Link>
// 			<Nav.Link as={Link} to="/seller_product_list">
// 				SellerProductList
// 			</Nav.Link>
// 			<Nav.Link as={Link} to="/login">
// 				Login
// 			</Nav.Link>
// 			<Nav.Link as={Link} to="/signup">
// 				SignUp
// 			</Nav.Link>
// 			<Nav.Link as={Link} to="/payment">
// 				Pay
// 			</Nav.Link>

// 			<Button onClick={LogOut}>Logout</Button>
// 		</Nav>
// 	</Container>
// </Navbar>
