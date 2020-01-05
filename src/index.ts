import {
	COLOR,
	SELECTED_TEXT_COLOR,
	TEXT_COLOR
} from './constants/defaultColors';
import isColor from './lib/isColor';
import pluginOptions from './options';
import PluginObjectWithComponents from './types/PluginObjectWithComponents';
import PluginOptions from './types/PluginOptions';
import RadioToggleValue from './types/RadioToggleValue';

import RadioToggleButtons from './components/RadioToggleButtons.vue';

import './scss/main.scss';

const VueRadioToggleButtons: PluginObjectWithComponents<PluginOptions> = {
	install(Vue, options?) {
		pluginOptions.color = isColor(options?.color) ? options.color : COLOR;
		pluginOptions.textColor = isColor(options?.textColor)
			? options.textColor
			: TEXT_COLOR;
		pluginOptions.selectedTextColor = isColor(options?.selectedTextColor)
			? options?.selectedTextColor
			: SELECTED_TEXT_COLOR;

		Vue.component('RadioToggleButtons', RadioToggleButtons);
	}
};

if (typeof window !== 'undefined' && window.Vue) {
	VueRadioToggleButtons.install(window.Vue);
}

VueRadioToggleButtons.components = {
	RadioToggleButtons
};

export { RadioToggleValue, PluginObjectWithComponents, PluginOptions };
export default VueRadioToggleButtons;
