/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				NotoSerif: [
					"Noto Serif",
					"serif",
				],
			},
			colors: {
				primary: "#efb6b2",
				secondary: "#4e4e4e",
				error: "#ff4a4a",
			},
			width: {
				128: "32rem",
			},
		},
	},
	plugins: [],
};
