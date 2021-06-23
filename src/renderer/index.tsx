import React from "react";
import ReactDom from "react-dom";

import App from "./App";

//styles
import "./Styles/app.css";
import "./Styles/constants.css";
import "./Styles/custom.css";
import "./Styles/main.css"


const Index = () => {
	return (
		<App />
	);
}

ReactDom.render(
	<Index />,
	document.getElementById('app'),
)