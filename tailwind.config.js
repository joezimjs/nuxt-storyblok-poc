/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
// const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons');

module.exports = {
	content: ['storyblok/**/*.{vue,js}', 'pages/**/*.vue', 'components/**/*.vue'],
	plugins: [
		require('@tailwindcss/typography'),
		// iconsPlugin({
		// 	collections: getIconCollections(['material-symbols']) // https://icones.js.org/collection/material-symbols
		// })
	]
};
