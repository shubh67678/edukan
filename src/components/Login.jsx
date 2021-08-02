import React from "react";
import { useForm } from "react-hook-form";
import { loginHandel } from "../services/LoginService";
import "../style.css";

export default function App() {
	/*{
//     "username":"test1",
//     "first_name":"non",
//     "last_name":"ls",
//     "email": "test@tes.com",
//     "password": "password123"
// } */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const token = await loginHandel(data);
		console.log(token.data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form">
			<div className="mb-3">
				<label className="form-label">Username</label>
				<input
					type="text"
					className="form-control"
					id="username"
					aria-describedby="emailHelp"
					required
					{...register("username")}
				/>
			</div>

			<div className="mb-3">
				<label className="form-label">Email address</label>
				<input
					type="email"
					className="form-control"
					id="email"
					aria-describedby="emailHelp"
					required
					{...register("email")}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Password</label>
				<input
					type="password"
					className="form-control"
					id="password"
					aria-describedby="emailHelp"
					required
					{...register("password")}
				/>
			</div>

			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
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
