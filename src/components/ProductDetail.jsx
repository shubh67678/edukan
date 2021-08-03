import React, { Component } from "react";
import { getProductById } from "../services/productService";
import Functionstripe from "./TestAPI";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContent } from "../CartDetails";

export default function ProductDetail(props) {
	const [productDetail, setProductDetail] = useState(null);
	const [Cart, addToCart] = useContext(CartContent);

	const fetchProductsData = async () => {
		const request = await getProductById(props.match.params.id);
		setProductDetail(request.data);
	};

	useEffect(() => {
		fetchProductsData();
	}, []);

	const findProductInCart = () => {
		//TO DO call when cart context changes
		var cartProducts = Cart["products"];
		console.log("inn");
		for (var i = 0; i < cartProducts.length; i++) {
			if (productDetail["id"] === cartProducts[i]["id"]) {
				return true;
			}
		}
		return false;
	};

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
									addToCart(productDetail);
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
