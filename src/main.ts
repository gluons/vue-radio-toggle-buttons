import Vue from 'vue';
import VueRadioToggleButtons from 'vue-radio-toggle-buttons';

import Layout from '@/layouts/Default.vue';

export default function (vue: typeof Vue) {
	vue.component('Layout', Layout);

	vue.use(VueRadioToggleButtons);
}
