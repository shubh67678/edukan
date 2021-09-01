import React from "react";
import { Component } from "react";
import { useForm } from "react-hook-form";
import { createProduct } from "../services/productService";
import { getProductById } from "../services/productService";
import { useEffect, useState } from "react";

import ProductEditForm from "../components/ProductEditForm";

// export function CallProductEdit() {
// 	const [data, setData] = useState(null);
// 	const { id } = useParams();
// 	console.log(id);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			setData(await getProductById());
// 		};
// 		fetchData();
// 	}, []);

// 	return data ? (
// 		<ProductEditForm preloadedValues={data} />
// 	) : (
// 		<div>Loading...</div>
// 	);
// }
// export default CallProductEdit;

class CallProductEdit extends Component {
	state = {};
	async componentDidMount() {
		const product_id = this.props.match.params.id;

		const request = await getProductById(product_id);
		//request has many variables
		this.setState({ product: request.data }); //assign data to products
		console.log(this.state.product);
	}
	render() {
		return this.state.product ? (
			<ProductEditForm
				preloadedValues={this.state.product}
				product_id={this.state.product.id}
			/>
		) : (
			<div>Loading...</div>
		);
	}
}

export default CallProductEdit;
