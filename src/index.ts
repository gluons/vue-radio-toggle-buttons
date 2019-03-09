import { PluginObject } from 'vue';

import Radio from './components/Radio.vue';

const VueRadioToggleSwitch: PluginObject<void> = {
	install(Vue) {
		Vue.component('Radio', Radio);
	}
};

export default VueRadioToggleSwitch;
