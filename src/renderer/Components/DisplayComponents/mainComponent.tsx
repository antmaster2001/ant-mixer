import React from "react";
import { Router, Switch, Route } from "react-router-dom";


import {MixerDisplay, ProgramsDisplay, history, MIDIDisplay} from "../index";

const MainDisplay = () => {
	return (
		<div className="text-normal col-span-5 p-12">
			<Router history={history}>
			<Switch>
				<Route path="/"exact component={MixerDisplay}></Route>
				<Route path="/ProgramsDisplay" exact component={ProgramsDisplay}></Route>
				<Route path="/MIDIDisplay" exact component={MIDIDisplay}></Route>
			</Switch>
		</Router>

		</div>
	);
}

export default MainDisplay;