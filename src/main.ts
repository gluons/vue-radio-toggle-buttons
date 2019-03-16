import VueRadioToggleButtons from 'vue-radio-toggle-buttons';

import Layout from '@/layouts/Default.vue';

export default function (Vue) {
	Vue.component('Layout', Layout);

	Vue.use(VueRadioToggleButtons);
}
