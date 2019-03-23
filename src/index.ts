import { PluginObject } from 'vue';

import RadioToggleButtons from './components/RadioToggleButtons.vue';

import './scss/main.scss';

const VueRadioToggleButtons: PluginObject<void> = {
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

export default VueRadioToggleButtons;
