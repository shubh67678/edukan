import React from "react";
import Product from "../components/Product";
import { getAllProducts } from "../services/productService";
import { useEffect, useState } from "react";

function Products() {
	const [allProducts, setAllProducts] = useState({});

	useEffect(() => {
		const fetchProductsData = async () => {
			const request = await getAllProducts();
			setAllProducts(request.data);
		};
		fetchProductsData();
	}, []);
	return allProducts.length ? (
		<div className="container overflow-hidden">
			{/* row-col-x is the number of cols depending on the area available at screen */}
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5">
				{/* each product is in a col and no. of cols is controlled  */}
				{allProducts.map((p) => (
					<div className="col" key={p.id}>
						<Product key={p.id} product={p} />
					</div>
				))}
			</div>
		</div>
	) : (
		<span>loading</span>
	);
}
export default Products;

// class Products extends Component {
// 	state = {
// 		products: [],
// 		hasError: false,
// 	};

// 	async componentDidMount() {
// 		const request = await getAllProducts();
// 		//request has many variables
// 		this.setState({ products: request.data }); //assign data to products
// 		console.log(this.state.products);
// 	}

// 	render() {
// 		return (
// 			<div className="container overflow-hidden">
// 				{/* row-col-x is the number of cols depending on the area available at screen */}
// 				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5">
// 					{this.state.products.map((p) => (
// 						/* each product is in a col and no. of cols is controlled  */
// 						<div className="col" key={p.id}>
// 							<Product key={p.id} product={p} />
// 							{/* {() => {
// 								ProductDetailFV(p.id);
// 							}}
// 						*/}
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		);
// 	}
// }
