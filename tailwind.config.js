/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	daisyui: {
		themes: ['light']
	},
	plugins: [require('flowbite/plugin'), require('daisyui')]
};
