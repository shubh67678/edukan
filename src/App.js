import React, { Component } from "react";

import { Store } from "./Store";
import PathOfLinks from "./components/PathOfLinks";
class App extends Component {
	render() {
		return (
			<Store>
				<PathOfLinks />
			</Store>
		);
	}
}

export default App;
