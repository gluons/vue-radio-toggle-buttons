import { PluginObject } from 'vue';

import RadioToggle from './components/RadioToggle.vue';

import './scss/main.scss';

const VueRadioToggleButtons: PluginObject<void> = {
	install(Vue) {
		Vue.component('Radio', RadioToggle);
	}
};

export default VueRadioToggleButtons;
