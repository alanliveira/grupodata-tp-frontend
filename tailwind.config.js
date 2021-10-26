module.exports = {
	purge: [
		'./src/pages/**/*.{js, ts, jsx, tsx}',
		'./src/components/**/*.{js, ts, jsx, tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'tp-purppe': '#3F3D56',
				'tp-yellow': '#FFF163',
				'tp-white': '#FFFFFF',
				'tp-green': '#57B793',
			},
			fontFamily: {
				'red-rose': ['Red Rose', 'cursive'],
				righteous: ['Righteous', 'cursive'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
