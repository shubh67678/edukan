import React, { useState,useContext } from "react";
import { useForm } from "react-hook-form";
import { loginHandel } from "../services/LoginService";
import "../style.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LoginContent } from "../contexts/AuthContext";


export default function App() {
	// const [loggedIn, setLoggedIn] = useState();
	const [isLoggedIn, setIsLoggedIn] = useContext(LoginContent);

	/*{
//     "username":"test1",
//     "first_name":"non",
//     "last_name":"ls",
//     "email": "test@tes.com",
//     "password": "password123"
// } */
	const notify = () => {toast.success("You have logged in!"); console.log(isLoggedIn);}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const token = await loginHandel(data);
		if (token.data["access"]) {
			setIsLoggedIn(true);
		}
		if (isLoggedIn) {
			notify();
		}

		console.log(token.data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Username"
						id="username"
						aria-describedby="emailHelp"
						required
						class="form-control rounded-pill border-0 shadow-sm px-4"
						{...register("username")}
					/>
				</div>
				<div className="mb-3">
					<input
						id="inputEmail"
						type="email"
						placeholder="Email address"
						required
						class="form-control rounded-pill border-0 shadow-sm px-4"
						{...register("email")}
					/>
				</div>
				<div className="mb-3">
					<input
						id="inputPassword"
						type="password"
						placeholder="Password"
						required
						class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
						{...register("password")}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-dark md-1 rounded-pill shadow-sm">
					Submit
				</button>
				<div class="text-center d-flex justify-content-between mt-4">
					<p>
						New here?
						<Link to="/Signup">Sign up</Link>
					</p>
				</div>
			</form>
			<ToastContainer />
		</>
	);
}

// import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
// import { Route, Switch, Link } from "react-router-dom";
// import { Form } from "react-bootstrap";

// class Login extends Component {
//
// 	state = {};

// 	handelSubmit = (event) => {
// 		event.preventDefault();
// 		console.log("submit");
// 	};

// 	render() {
// 		return (
// 			<div className="d-inline-flex p-2" justify="center">
// 				<Form onSubmit={this.handelSubmit}>
// 					<Form.Group controlId="formBasicUsername">
// 						<Form.Label>Username</Form.Label>
// 						<Form.Control
// 							type="username"
// 							placeholder="Enter username"
// 						/>
// 					</Form.Group>
// 					<Form.Group controlId="formBasicFirstName">
// 						<Form.Label>FirstName</Form.Label>
// 						<Form.Control
// 							type="FirstName"
// 							placeholder="Enter first name"
// 						/>
// 					</Form.Group>
// 					<Form.Group controlId="formBasicLastName">
// 						<Form.Label>LastName</Form.Label>
// 						<Form.Control
// 							type="LastName"
// 							placeholder="Enter last name"
// 						/>
// 					</Form.Group>
// 					<Form.Group controlId="formBasicEmail">
// 						<Form.Label>Email address</Form.Label>
// 						<Form.Control type="email" placeholder="Enter email" />
// 						<Form.Text className="text-muted">
// 							We'll never share your email with anyone else :)
// 						</Form.Text>
// 					</Form.Group>
// 					<Form.Group controlId="formBasicPassword">
// 						<Form.Label>Password</Form.Label>
// 						<Form.Control type="password" placeholder="Password" />
// 					</Form.Group>

// 					<Button variant="primary" type="submit">
// 						Submit
// 					</Button>
// 				</Form>
// 			</div>
// 		);
// 	}
// }

// export default Login;
