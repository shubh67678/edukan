import React, { Component } from "react";
import { getProductById } from "../services/productService";
import Functionstripe from "./TestAPI";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContent } from "../CartDetails";

export default function ProductDetail(props) {
	const [productDetail, setProductDetail] = useState(null);
	const [productId, setProductId] = useState();
	const [test, addToCart] = useContext(CartContent);

	const fetchProductsData = async () => {
		console.log(props.match);
		setProductId(props.match.params.id);
		const request = await getProductById(props.match.params.id);
		setProductDetail(request.data);
	};

	useEffect(() => {
		console.log(test);
		fetchProductsData();
	}, []);
	return productDetail ? (
		<div className="container overflow-hidden">
			<div className="row row-cols-1 row-cols-lg-2  gy-5 mt-5">
				<div className="col">
					<img
						className="photo-detail"
						className="img-fluid w-100"
						src={productDetail.images}
						alt=""
					/>
				</div>
				<div className="container-fluid d-flex flex-column h-100">
					<div className="row">
						<h3>{productDetail.name}</h3>
					</div>
					<div className="row">
						<h5>Rs. {productDetail.price}</h5>
					</div>
					<div className="row ">
						<div className="text-muted">
							{productDetail.description}
						</div>
					</div>

					<div className="row">
						<div className="col">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => {
									addToCart(props.match.params.id);
								}}>
								Cart
							</button>
						</div>
						<div className="col">
							<Link to={"/payment/"}>
								<button
									type="button"
									onClick={Functionstripe}
									className="btn btn-dark">
									Buy
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<p>loading</p>
	);
}

// class ProductDetail extends Component {
// 	state = {
// 		product: {},
// 	};
// 	redirectToPayment = () => {
// 		console.log("in");
// 	};
// 	async componentDidMount() {
// 		//props.match is getting from the react router
// 		//params is all the list of the parameters send
// 		// id is the params we currently need
// 		const product_id = this.props.match.params.id;

// 		const request = await getProductById(product_id);
// 		this.setState({ product: request.data });
// 		console.log(this.state.product.images, this.state.product.id);
// 	}
// 	render() {
// 		return (
// 			<div className="container overflow-hidden">
// 				<div className="row row-cols-1 row-cols-lg-2  gy-5 mt-5">
// 					<div className="col">
// 						<img
// 							className="photo-detail"
// 							className="img-fluid w-100"
// 							src={this.state.product.images}
// 							alt=""
// 						/>
// 					</div>
// 					<div className="container-fluid d-flex flex-column h-100">
// 						<div className="row">
// 							<h3>{this.state.product.name}</h3>
// 						</div>
// 						<div className="row">
// 							<h5>Rs. {this.state.product.price}</h5>
// 						</div>
// 						<div className="row ">
// 							<div className="text-muted">
// 								{this.state.product.description}
// 							</div>
// 						</div>

// 						<div className="row">
// 							<div className="col">
// 								<button
// 									type="button"
// 									className="btn btn-secondary"
// 									onClick={() => Cart(this.state.product.id)}>
// 									Cart
// 								</button>
// 							</div>
// 							<div className="col">
// 								<Link to={"/payment/"}>
// 									<button
// 										type="button"
// 										onClick={Functionstripe}
// 										className="btn btn-dark">
// 										Buy
// 									</button>
// 								</Link>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default ProductDetail;
