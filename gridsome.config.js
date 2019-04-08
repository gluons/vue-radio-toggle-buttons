const nodeExternals = require('webpack-node-externals');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	siteName: 'Vue Radio Toggle Buttons',
	siteDescription: 'Radio toggle buttons for Vue.',
	pathPrefix: isProd ? '/vue-radio-toggle-buttons' : '',
	chainWebpack(config, { isServer }) {
		config.module
			.rule('mjs')
			.test(/\.mjs$/)
			.type('javascript/auto');

		config.resolve.alias
			.set('vue$', 'vue/dist/vue.esm.js');

		if (isServer) {
			config.externals(nodeExternals({
				whitelist: [
					/\.css$/
				]
			}));
		}
	},
	plugins: [
		{
			use: 'gridsome-plugin-pug'
		},
		{
			use: 'gridsome-plugin-ts'
		}
	]
};
