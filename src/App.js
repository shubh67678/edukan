import React, { Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

import Products from "./components/Products";
import NavBar from "./components/NavBar";
class App extends Component {
	state = {};
	render() {
		return (
			<div>
				<NavBar />
				<Products />
			</div>
		);
	}
}

export default App;
