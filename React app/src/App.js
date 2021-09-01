import React, { Component } from "react";
import { CartDetails } from "./CartDetails";
import PathOfLinks from "./components/PathOfLinks";
import {LoginData} from "./contexts/AuthContext";
class App extends Component {
	render() {
		return (
			<LoginData>
				<CartDetails>
					<PathOfLinks />
				</CartDetails>
			</LoginData>
		);

	}
}

export default App;
