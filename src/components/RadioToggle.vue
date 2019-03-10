<template lang="pug">
label.radio-toggle-button(
	:class='classes'
	:style='style'
	@mouseover='onMouseOver'
	@mouseout='onMouseOut'
)
	input(
		type='radio'
		:value='value'
		v-model='computedValue'
	)
	slot
</template>

<script lang="ts">
import Color from 'color';
import { StandardProperties } from 'csstype';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import calculateColors from '../lib/calculateColors';

const defaultColor = '#333';

@Component({
	name: 'RadioToggle',
	model: {
		prop: 'mValue'
	}
})
export default class RadioToggle extends Vue {
	@Prop(String) value: string;
	@Prop() mValue: any;
	@Prop({
		type: String,
		default: defaultColor,
		validator(value) {
			try {
				Color(value);

				return true;
			} catch (_) {
				return false;
			}
		}
	})
	color: string;

	currentValue: any = this.mValue; // Represent current value of all radio buttons in group
	isHovered: boolean = false;

	onMouseOver() {
		this.isHovered = true;
	}
	onMouseOut() {
		this.isHovered = false;
	}

	// For internal radio's v-model
	get computedValue() {
		return this.currentValue;
	}
	set computedValue(newValue: any) {
		this.currentValue = newValue;

		this.$emit('input', newValue);
	}
	get isSelected() {
		return this.currentValue === this.value;
	}
	get classes() {
		return {
			'is-selected': this.isSelected,
			'is-hovered': this.isHovered
		};
	}
	get style() {
		const { color, isSelected, isHovered } = this;
		const {
			textColor,
			borderColor,
			selectedTextColor,
			selectedBgColor,
			selectedHoverColor
		} = calculateColors(color);
		const actualBorderColor = isHovered ? selectedBgColor : borderColor;
		const actualSelectedBorderColor = isHovered ? selectedHoverColor : selectedBgColor;
		const actualSelectedBgColor = isHovered ? selectedHoverColor : selectedBgColor;
		const styles: StandardProperties = {
			color: isSelected ? selectedTextColor : textColor,
			borderColor: isSelected ? actualSelectedBorderColor : actualBorderColor,
			backgroundColor: isSelected ? actualSelectedBgColor : null,
		};

		return styles;
	}

	// Catch this component's v-model change
	@Watch('mValue')
	onMValueChange(newValuue: any) {
		this.currentValue = newValuue;
	}
}
</script>
