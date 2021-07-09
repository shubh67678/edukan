import React, { Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import axios from "axios";

import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import SellerOrderList from "./components/SellerOrderList";
import SellerProductList from "./components/SellerProductList";
import EditProductSeller from "./components/EditProductSeller";
import EditOrderSeller from "./components/EditOrderSeller";
class App extends Component {
	state = {};
	render() {
		return (
			<div>
				<NavBar />
				<div className="content">
					<Switch>
						<Route path="/product/:id" component={ProductDetail} />
						<Route path="/products" component={Products} />
						<Route
							path="/product-detail"
							component={ProductDetail}
						/>
						<Route
							path="/seller_order_list"
							component={SellerOrderList}
						/>
						<Route
							path="/seller_product_list"
							component={SellerProductList}
						/>
						<Route path="/products" component={Products} />
						<Route
							path="/edit_product_seller/:id"
							component={EditProductSeller}
						/>
						<Route
							path="/edit_order_seller/:id"
							component={EditOrderSeller}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
