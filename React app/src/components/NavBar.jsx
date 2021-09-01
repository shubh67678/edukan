import React, { Component } from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LogOut } from "../services/logout";
import { CartContent } from "../CartDetails";
import { useContext } from "react";
import { Cart } from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { LoginContent } from "../contexts/AuthContext";
import LogOutButton from './Logout/LogoutButton';


const NavBar = () => {
	const [test, setTest] = useContext(CartContent);
	const [isLoggedIn, setIsLoggedIn] = useContext(LoginContent);
	const printCart = () => {
		console.log(test);
	};
	const loggedIn = false;

	return (
		<Navbar
			className="navbar-main navbar-transparent navbar-light headroom"
			expand="lg"
			id="navbar-main">
			<Container>
				<Navbar.Brand href="/home">EDukan</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="m-auto">
						{/* <Nav.Link as={Link} to="#">
							Home
						</Nav.Link> */}
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
						
						{isLoggedIn ? (
							<LogOutButton/>
						) : (
							<>
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>
							<Link to="/signup">
								<Button variant="outline-dark">SignUp</Button>
							</Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
