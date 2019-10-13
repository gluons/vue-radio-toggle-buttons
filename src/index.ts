import PluginObjectWithComponents from './types/PluginObjectWithComponents';
import RadioToggleValue from './types/RadioToggleValue';

import RadioToggleButtons from './components/RadioToggleButtons.vue';

import './scss/main.scss';

const VueRadioToggleButtons: PluginObjectWithComponents<void> = {
	install(Vue) {
		Vue.component('RadioToggleButtons', RadioToggleButtons);
	}
};

if (typeof window !== 'undefined' && window.Vue) {
	VueRadioToggleButtons.install(window.Vue);
}

VueRadioToggleButtons.components = {
	RadioToggleButtons
};

export { RadioToggleValue, PluginObjectWithComponents };
export default VueRadioToggleButtons;
