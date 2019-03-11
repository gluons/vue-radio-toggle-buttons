/// <reference path='../src/sfc.d.ts' />

import Vue from 'vue';

import VueRadioToggleButtons from '../src';
import App from './App.vue';

Vue.use(VueRadioToggleButtons);

new Vue({
	el: '#app',
	render: h => h(App)
});
