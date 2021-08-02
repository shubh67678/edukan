import React, { Component } from "react";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";

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
// 		return <h1>adfaqfe</h1>;
// 	}
// }

export default function ProductDetail(props) {
	const [productDetail, setProductDetail] = useState();

	useEffect(() => {
		const fetchProductsData = async () => {
			const product_id = props.match.params.id;
			const request = await getProductById(product_id);
			setProductDetail(request.data);
		};
		fetchProductsData();
	}, []);
	return <div></div>;
}
