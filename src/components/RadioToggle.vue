<template lang="pug">
label.radio-toggle-button(
	:class='{ "is-selected": isSelected }'
)
	input(
		type='radio'
		:value='value'
		v-model='computedValue'
	)
	slot
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({
	name: 'RadioToggle',
	model: {
		prop: 'mValue'
	}
})
export default class RadioToggle extends Vue {
	@Prop(String) value: string;
	@Prop() mValue: any;

	// Represent current value of all radio buttons in group
	currentValue: any = this.mValue;

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

	// Catch this component's v-model change
	@Watch('mValue')
	onMValueChange(newValuue: any) {
		this.currentValue = newValuue;
	}
}
</script>
