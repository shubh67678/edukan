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
import Login from "./components/Login";
import CreateProductForm from "./components/ProductAddForm";
import ProductEditForm from "./components/CallProductEdit";
import CallProductEdit from "./components/CallProductEdit";
class App extends Component {
	state = {};
	render() {
		return (
			<div>
				<NavBar />
				<div className="content">
					<Switch>
						<Route path="/product/:id" component={ProductDetail} />
						<Route
							path="/create_product"
							component={CreateProductForm}
						/>
						<Route path="/login" component={Login} />
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
							path="/product_edit_form/:id"
							component={CallProductEdit}
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
