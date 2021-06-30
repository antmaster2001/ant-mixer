import React from "react";

import {SideBarButton} from "../index";


const SideBarDisplay = () => {

	return (
		<div className="col-span-1 border-r border-gray-300 pt-5">
			<div className="flex text-normal items-center justify-center mb-4">
				<h1>ANT-MIXER</h1>
			</div>
			<div className="">
				<SideBarButton data={{name : "Mixer", linkTo: ""}}/>
				<SideBarButton data={{name : "Programs", linkTo: "ProgramsDisplay"}}/>
			</div>
		</div>
	);
}

export default SideBarDisplay;