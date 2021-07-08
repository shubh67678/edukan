import React, { Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

import ProductDetail from "./components/ProductDetail";
import NavBar from "./components/NavBar";
class App extends Component {
	state = {};
	render() {
		return (
			<div>
				<NavBar />
				<ProductDetail />
			</div>
		);
	}
}

export default App;
