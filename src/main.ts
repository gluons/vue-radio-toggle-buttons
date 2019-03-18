import Vue from 'vue';
import VueRadioToggleButtons from 'vue-radio-toggle-buttons';

import { registerComponents } from '@/components';
import Layout from '@/layouts/Default.vue';

import '@/scss/main.scss';

export default function (vue: typeof Vue, { head }) {
	registerComponents(vue);

	vue.component('Layout', Layout);

	vue.use(VueRadioToggleButtons);

	head.link.push({
		rel: 'stylesheet',
		href:
			'https://fonts.googleapis.com/css?family=Taviraj:400,700&amp;subset=thai'
	});
}
