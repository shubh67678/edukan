import React, { Component } from "react";
import { getProductById } from "../services/productService";
import { sendProductData } from "../services/sendProductData";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

class ProductDetail extends Component {
	state = {
		product: {},
	};
	async componentDidMount() {
		//props.match is getting from the react router
		//params is all the list of the parameters send
		// id is the params we currently need
		const product_id = 16;

		const request = await getProductById(product_id);
		this.setState({ product: request.data });
		console.log(this.state.product.images);
	}
	// const Handelsubmit = () => {
	// 	console.log(state.product);
	// }
	sendProductToBackend = async (event) => {
		const post_request = await sendProductData(this.state.product);
	};
	render() {
		return (
			<div className="container overflow-hidden">
				<div className="row row-cols-1 row-cols-lg-2  gy-5 mt-5">
					<div className="col">
						<img
							className="photo-detail"
							className="img-fluid w-100"
							src={this.state.product.images}
							alt=""
						/>
					</div>
					<div className="container-fluid d-flex flex-column h-100">
						<div className="row">
							<h3>{this.state.product.name}</h3>
						</div>
						<div className="row">
							<h5>Rs. {this.state.product.price}</h5>
						</div>
						<div className="row ">
							<div className="text-muted">
								{this.state.product.description}
							</div>
						</div>

						<div className="row">
							<div className="col">
								<button
									type="button"
									className="btn btn-secondary">
									Cart
								</button>
							</div>
							<div className="col">
								<button
									onClick={this.sendProductToBackend}
									className="btn btn-secondary">
									Buy
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductDetail;
