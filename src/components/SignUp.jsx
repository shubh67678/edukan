import React from "react";
import { useForm } from "react-hook-form";
import { sendSignUpData } from "../services/SignUpService";
import { useHistory } from "react-router";
import { useState } from "react";

export default function App() {
	const [history, setHistoy] = useState(useHistory);

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();
	const onSubmit = async (data) => {
		const token = await sendSignUpData(data);
		console.log(token.data);
		history.push("/products");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form">
			<div className="mb-3">
				<label className="form-label">Username</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					required
					{...register("username", { required: true })}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">First name</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					required
					{...register("first_name")}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Last Name</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					required
					{...register("last_name")}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
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
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					required
					{...register("password")}
				/>
			</div>
			<div className="mb-3">
				<label>Confirm Password: </label>
				<input
					type="password"
					className="form-control"
					id="confirmPassword"
					aria-describedby="emailHelp"
					required
					{...register("passwordConfirmation", {
						required: "Please confirm password!",
						validate: {
							matchesPreviousPassword: (value) => {
								const { password } = getValues();
								return (
									password === value ||
									"Passwords should match!"
								);
							},
						},
					})}
				/>
				{errors.passwordConfirmation && (
					<div class="alert alert-warning" role="alert">
						{errors.passwordConfirmation.message}
					</div>
				)}
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
