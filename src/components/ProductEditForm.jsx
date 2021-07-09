import React from "react";
import { useForm } from "react-hook-form";
import { editProduct } from "../services/productService";
export default function CreateProductForm({ preloadedValues, product_id }) {
	// {
	//     "url": "http://127.0.0.1:8000/product/7/",
	//     "name": "brick",
	//     "company": 1,
	//     "price": 100,
	//     "id": 7
	// }
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: preloadedValues,
	});
	const onSubmit = async (data) => {
		const new_product = await editProduct(data, product_id);
		console.log(new_product);
	};

	return (
		<div className="d-inline-flex p-2" justify="center">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label className="form-label">Name</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						{...register("name")}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Company</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						{...register("company")}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Price</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						{...register("price")}
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
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
