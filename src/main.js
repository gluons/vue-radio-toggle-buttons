import VueRadioToggleButtons from 'vue-radio-toggle-buttons';

import Layout from '@/layouts/Default.vue';

/**
 * @param Vue { typeof import('vue').default }
 */
export default function (Vue) {
	Vue.component('Layout', Layout);

	Vue.use(VueRadioToggleButtons);
}
