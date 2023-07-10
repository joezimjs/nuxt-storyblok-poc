module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	extends: ['@nuxtjs/eslint-config-typescript'],
	plugins: [],
	rules: {
		indent: ['warn', 'tab'],
		semi: ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		'no-tabs': 'off',
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		],
		'vue/multi-word-component-names': 'off',
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['warn', 'stroustrup', { allowSingleLine: true }],
		'space-in-parens': ['error', 'never']
	}
};
