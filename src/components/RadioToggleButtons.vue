<template lang="pug">
span
	RadioToggle(
		v-for='value in values'
		:mValue='mValue'
		:key='value.value'
		:value='value.value'
		:color='actualColor'
		:textColor='actualTextColor'
		:selectedTextColor='actualSelectedTextColor'
		:disabled='value.disabled'
		@input='onInput'
	)
		| {{ value.label }}
</template>

<script lang="ts">
import { Component, Model, Prop, Vue } from 'vue-property-decorator';

import pluginOptions from '../options';
import RadioToggleValue from '../types/RadioToggleValue';
import RadioToggle from './RadioToggle.vue';

import isColor from '../lib/isColor';

@Component({
	name: 'RadioToggleButtons',
	components: {
		RadioToggle
	}
})
export default class RadioToggleButtons extends Vue {
	@Model('change') mValue: any;

	@Prop({ type: Array, required: true }) values: RadioToggleValue[];
	@Prop({ type: String, validator: isColor }) color: string;
	@Prop({ type: String, validator: isColor }) textColor: string;
	@Prop({ type: String, validator: isColor }) selectedTextColor: string;

	get actualColor(): string {
		if (this.color) {
			return this.color;
		}

		return pluginOptions.color;
	}
	get actualTextColor(): string {
		if (this.textColor) {
			return this.textColor;
		}

		return pluginOptions.textColor;
	}
	get actualSelectedTextColor(): string {
		if (this.selectedTextColor) {
			return this.selectedTextColor;
		}

		return pluginOptions.selectedTextColor;
	}

	onInput(newValue: any) {
		this.$emit('change', newValue);
	}
}
</script>
