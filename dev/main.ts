/// <reference path='../src/sfc.d.ts' />

import Vue from 'vue';

import VueRadioToggleSwitch from '../src';
import App from './App.vue';

Vue.use(VueRadioToggleSwitch);

new Vue({
	el: '#app',
	render: h => h(App)
});
