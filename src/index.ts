import { PluginObject } from 'vue';

import RadioToggleButtons from './components/RadioToggleButtons.vue';

import './scss/main.scss';

const VueRadioToggleButtons: PluginObject<void> = {
	install(Vue) {
		Vue.component('RadioToggleButtons', RadioToggleButtons);
	}
};

export default VueRadioToggleButtons;
