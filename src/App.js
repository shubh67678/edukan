import React, { Component } from "react";
import { CartDetails } from "./CartDetails";
import PathOfLinks from "./components/PathOfLinks";
class App extends Component {
	render() {
		return (
			<CartDetails>
				<PathOfLinks />
			</CartDetails>
		);
	}
}

export default App;
