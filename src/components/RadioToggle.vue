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

import isColor from '../lib/isColor';

const defaultColor = '#333';
const defaultTextColor = defaultColor;
const defaultSelectedTextColor = '#eee';

@Component({
	name: 'RadioToggle',
	model: {
		prop: 'mValue'
	}
})
export default class RadioToggle extends Vue {
	@Prop(String) value: string;
	@Prop() mValue: any;
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
		const {
			color,
			textColor,
			selectedTextColor,
			isHovered,
			isSelected
		} = this;
		const mainColor = Color(color);
		const hoverColor = mainColor.isDark()
			? mainColor.lighten(0.5).string()
			: mainColor.darken(0.3).string();
		const styles: StandardProperties = {
			color: textColor
		};

		if (isHovered) {
			styles.borderColor = color;
		}
		if (isSelected) {
			styles.color = selectedTextColor;

			if (isHovered) {
				styles.backgroundColor = hoverColor;
				styles.borderColor = hoverColor;
			} else {
				styles.backgroundColor = color;
				styles.borderColor = color;
			}
		}

		return styles;
	}

	// Catch this component's v-model change
	@Watch('mValue')
	onMValueChange(newValuue: any) {
		this.currentValue = newValuue;
	}
}
</script>
