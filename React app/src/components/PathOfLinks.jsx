import React, { Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

import ProductDetail from "./ProductDetail";
import Products from "./Products";
import SellerOrderList from "./SellerOrderList";
import SellerProductList from "./SellerProductList";
import EditProductSeller from "./EditProductSeller";
import Login from "./Login";
import SignUp from "./SignUp";
import CreateProductForm from "./ProductAddForm";
import ProductEditForm from "./CallProductEdit";
import CallProductEdit from "./CallProductEdit";
import CallOrderEdit from "./CallOrderEdit";
// import Functionstripe from "./TestAPI";
import Functionstripe from "./PaymentContainer";
import ElementBuilder from "./PaymentContainer";
import TestHook from "./TestHook";
import Cart from "./Cart";
import { Home } from "./HomeComponent/Home";
import StyledLogin from "./LoginSignUpComponent/StyledLogin";
import StyledSignUp from "./LoginSignUpComponent/StyledSignUp";

export default function PathOfLinks() {
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
					<Route path="/login" component={StyledLogin} />
					<Route path="/loginCore" component={Login} />
					<Route path="/signup" component={StyledSignUp} />
					<Route path="/products" component={Products} />

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
						path="/order_edit_form/:id"
						component={CallOrderEdit}
					/>
					<Route path="/payment" component={Functionstripe} />
					<Route path="/testHook" component={TestHook} />
					<Route path="/Cart" component={Cart} />
					<Route path="/home" component={Home} />
				</Switch>
			</div>
		</div>
	);
}
