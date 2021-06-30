import React from "react";

const ProgramsDisplay = () => {

	const gameTypes : any = {
		1: "Mic",
		2: "Voice Call",
		3: "Browser",
		4: "Music",
		5: "Movie app",
		6: "",
		7: "Optional",
		8: "Game"
	}

	const programTestData = [
		{
			icon: "https://theme.zdassets.com/theme_assets/518064/9766b1eef40938c1aeab5838af0a06a29647d7eb.png",
			name: "Sea of thieves",
			type: 8
		},
		{
			icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png",
			name: "Minecraft",
			type: 8
		},
		{
			icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png",
			name: "Chrome",
			type: 3
		},
		{
			icon: "https://cdn2.iconfinder.com/data/icons/atrous/512/speaker_volume-512.png",
			name: "System sounds",
		},
		{
			icon: "https://cdn.icon-icons.com/icons2/836/PNG/512/Spotify_icon-icons.com_66783.png",
			name: "Spotify",
			type: 4
		},
		{
			icon: "https://cdn.iconscout.com/icon/free/png-512/vlc-media-player-2-569258.png",
			name: "VLC",
			type: 5
		},
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