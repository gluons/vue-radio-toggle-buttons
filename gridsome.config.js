module.exports = {
	siteName: 'Vue Radio Toggle Buttons',
	siteDescription: 'Radio toggle buttons for Vue.',
	chainWebpack(config) {
		config.resolve.extensions
			.prepend('.ts');

		config.module
			.rule('pug')
				.test(/\.pug$/)
				.use('pug')
					.loader('pug-plain-loader')
					.end()
				.end()
			.rule('ts')
				.test(/\/.ts$/)
				.use('ts')
					.loader('ts-loader')
					.options({
						appendTsSuffixTo: [/\.vue$/]
					});
	}
};
