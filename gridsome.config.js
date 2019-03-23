const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	siteName: 'Vue Radio Toggle Buttons',
	siteDescription: 'Radio toggle buttons for Vue.',
	pathPrefix: isProd ? '/vue-radio-toggle-buttons' : '/',
	chainWebpack(config) {
		config.module
			.rule('mjs')
			.test(/\.mjs$/)
			.type('javascript/auto');

		config.resolve.alias
			.set('vue$', 'vue/dist/vue.esm.js');
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
