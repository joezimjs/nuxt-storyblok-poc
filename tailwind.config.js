/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['storyblok/**/*.{vue,js}', 'pages/**/*.vue', 'components/**/*.vue'],
	plugins: [
		require('@tailwindcss/typography')
	]
};
