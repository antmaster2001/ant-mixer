import React from "react";
import {history} from "../index"

const SideBarButton = (params : any) => {
    console.log(params)
	return(
		<div className="text-normal hover:text-white hover:bg-gray-600 cursor-pointer py-3 pl-4 " onClick={() => history.push("/" + params.data.linkTo)}>
			<h1>{params.data.name}</h1>
		</div>
	);
}

export default SideBarButton;