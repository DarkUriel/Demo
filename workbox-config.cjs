module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpeg,css,js,json,html,svg}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};