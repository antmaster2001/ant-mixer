import React from "react";

const ProgramsDisplay = () => {

	const gameTypes : any = {
		1: "game",
		2: "browser"
	}

	const programTestData = [
		{
			icon: "https://theme.zdassets.com/theme_assets/518064/9766b1eef40938c1aeab5838af0a06a29647d7eb.png",
			name: "Sea of thieves",
			type: 1
		}
	]

	return (
		<div className="w-full">
			<table className="border-collapse border border-green-800 w-full">
				<thead>
					<tr>
						<th className="border border-green-600 ...">Icon</th>
						<th className="border border-green-600 ...">Name</th>
						<th className="border border-green-600 ...">Type</th>
					</tr>
				</thead>
				<tbody>
					{programTestData.map((data: any, index: number) => (
						<tr>
							<td className="border border-green-600 ..."><img src={data.icon} alt="" width="100" height="100" /></td>
							<td className="border border-green-600 ...">{data.name}</td>
							<td className="border border-green-600 ...">{gameTypes[data.type]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ProgramsDisplay;