import React from "react";

import {SideBarDisplay, MainComponent} from "../renderer/Components/index";

const App = () => {
	return(
		<div className="grid grid-cols-6">
			<SideBarDisplay />
			<MainComponent />
		</div>
	);
}

export default App;