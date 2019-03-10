import { PluginObject } from 'vue';

import RadioToggle from './components/RadioToggle.vue';

import './scss/main.scss';

const VueRadioToggleSwitch: PluginObject<void> = {
	install(Vue) {
		Vue.component('Radio', RadioToggle);
	}
};

export default VueRadioToggleSwitch;
