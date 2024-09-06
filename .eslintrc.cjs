/**
 * @type {import('eslint').Linter.Config}
 */

module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'@typescript-eslint/no-explicit-any': ['off'],
		'prettier/prettier': ['warn', { endOfLine: 'auto' }],
	},
};
