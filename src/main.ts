import Vue from 'vue';
import VueGitHubCorners from 'vue-gh-corners';
import VueGitHubButtons from 'vue-github-buttons';
import VueHighlightJS, { Options as VueHighlightJSOptions } from 'vue-highlight.js';
import VueRadioToggleButtons from 'vue-radio-toggle-buttons';

import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vueLang from 'vue-highlight.js/lib/languages/vue';

import { registerComponents } from '@/components';
import Layout from '@/layouts/Default.vue';

import 'highlight.js/styles/dracula.css';
import 'vue-gh-corners/dist/vue-github-corners.iife.css';
import 'vue-github-buttons/dist/vue-github-buttons.css';
import 'vue-radio-toggle-buttons/dist/vue-radio-toggle-buttons.css';

import '@/scss/main.scss';

export default function (vue: typeof Vue, { head }) {
	registerComponents(vue);

	vue.component('Layout', Layout);

	vue.use(VueGitHubCorners);
	vue.use(VueGitHubButtons);
	vue.use<VueHighlightJSOptions>(VueHighlightJS, {
		languages: {
			bash,
			css,
			javascript,
			vue: vueLang
		}
	});
	vue.use(VueRadioToggleButtons);

	head.link.push({
		rel: 'stylesheet',
		href:
			'https://fonts.googleapis.com/css?family=Taviraj:400,700&amp;subset=thai'
	});
}
