import React, { Component } from "react";
import Product from "../components/Product";
import { getAllProducts } from "../services/productService";

class Products extends Component {
	state = {
		products: [],
	};

	async componentDidMount() {
		const request = await getAllProducts();
		//request has many variables
		this.setState({ products: request.data }); //assign data to products
		console.log(this.state.products);
	}

	render() {
		return (
			<div className="container overflow-hidden">
				{/* row-col-x is the number of cols depending on the area available at screen */}
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5">
					{this.state.products.map((p) => (
						/* each product is in a col and no. of cols is controlled  */
						<div className="col" key={p.id}>
							<Product key={p.id} product={p} />
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Products;
