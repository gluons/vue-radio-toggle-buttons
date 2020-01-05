/// <reference path='../src/sfc.d.ts' />

import Vue from 'vue';

import VueRadioToggleButtons from '../src';
import PluginOptions from '../src/types/PluginOptions';
import App from './App.vue';

Vue.use<PluginOptions>(VueRadioToggleButtons, {
	color: 'red',
	textColor: 'indigo',
	selectedTextColor: 'yellow'
});

new Vue({
	el: '#app',
	render: h => h(App)
});
