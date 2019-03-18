import Vue from 'vue';

import V from './V.vue';

export {
	V
};

export function registerComponents(vue: typeof Vue) {
	vue.component('V', V);
}
