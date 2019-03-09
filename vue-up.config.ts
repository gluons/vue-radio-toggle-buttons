import { Configuration } from '@gluons/vue-up';
import { resolve } from 'path';

const config: Configuration = {
	entry: resolve(__dirname, './src/index.ts'),
	libraryName: 'VueRadioToggleSwitch',
	dev: {
		entry: resolve(__dirname, './dev/main.ts'),
		htmlTitle: 'Vue Radio Toggle Switch'
	}
};

export default config;
