import React from "react";
import { Router, Switch, Route } from "react-router-dom";


import {MixerDisplay, ProgramsDisplay, history} from "../index";

const MainDisplay = () => {
	return (
		<div className="text-normal grid justify-items-center col-span-4">
			<Router history={history}>
			<Switch>
				<Route path="/"exact component={MixerDisplay}></Route>
				<Route path="/ProgramsDisplay" exact component={ProgramsDisplay}></Route>
			</Switch>
		</Router>

		</div>
	);
}

export default MainDisplay;