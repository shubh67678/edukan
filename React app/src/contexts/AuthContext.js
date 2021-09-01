import React, { useState, useContext } from "react";
import { StrictMode } from "react";

const loggedIn = false;
export const LoginContent = React.createContext();

export const LoginData = ({ children }) => {
	const [state, setState] = useState(loggedIn);

	return (
		<LoginContent.Provider value={[state,setState]}>
			{children}
		</LoginContent.Provider>
	);
};
