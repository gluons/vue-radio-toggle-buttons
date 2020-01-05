<template lang="pug">
label.radio-toggle-button(
	:class='classes'
	:style='style'
	@click='onClick'
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
import { Component, Model, Prop, Vue, Watch } from 'vue-property-decorator';

import {
	COLOR,
	SELECTED_TEXT_COLOR,
	TEXT_COLOR
} from '../constants/defaultColors';

@Component({
	name: 'RadioToggle'
})
export default class RadioToggle extends Vue {
	@Model() mValue: any;

	@Prop(String) value: string;
	@Prop({ type: String, default: COLOR }) color: string;
	@Prop({ type: String, default: TEXT_COLOR }) textColor: string;
	@Prop({ type: String, default: SELECTED_TEXT_COLOR })
	selectedTextColor: string;
	@Prop({ type: Boolean, default: false }) disabled: boolean;

	currentValue: any = this.mValue; // Represent current value of all radio buttons in group
	isHovered: boolean = false;

	onClick(e) {
		if (this.disabled) {
			e.preventDefault();
		}
	}
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
			disabled,
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

		if (!disabled && isHovered) {
			styles.color = color;
			styles.borderColor = color;
		}
		if (!disabled && isSelected) {
			styles.color = selectedTextColor;

			if (isHovered) {
				styles.backgroundColor = hoverColor;
				styles.borderColor = hoverColor;
			} else {
				styles.backgroundColor = color;
				styles.borderColor = color;
			}
		}
		if (disabled) {
			const disabledColor = '#bababa';

			styles.color = disabledColor;
			styles.cursor = 'no-drop';
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
