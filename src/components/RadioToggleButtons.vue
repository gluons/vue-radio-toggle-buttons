<template lang="pug">
span
	RadioToggle(
		v-for='value in values'
		:mValue='mValue'
		:key='value.value'
		:value='value.value'
		:color='color'
		:textColor='textColor'
		:selectedTextColor='selectedTextColor'
		@input='onInput'
	)
		| {{ value.label }}
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator';

import RadioToggle from './RadioToggle.vue';

import isColor from '../lib/isColor';

type RadioToggleValue = {
	label: string;
	value: string;
};

const defaultColor = '#333';
const defaultTextColor = defaultColor;
const defaultSelectedTextColor = '#eee';

@Component({
	name: 'RadioToggleButtons',
	components: {
		RadioToggle
	}
})
export default class RadioToggleButtons extends Vue {
	@Model('change') mValue: any;

	@Prop({ type: Array, required: true }) values: RadioToggleValue[];
	@Prop({ type: String, default: defaultColor, validator: isColor })
	color: string;
	@Prop({ type: String, default: defaultTextColor, validator: isColor })
	textColor: string;
	@Prop({
		type: String,
		default: defaultSelectedTextColor,
		validator: isColor
	})
	selectedTextColor: string;

	onInput(newValue: any) {
		this.$emit('change', newValue);
	}
}
</script>
