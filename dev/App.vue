<template lang="pug">
#demo
	.radio-buttons
		RadioToggleButtons(v-model='currentValue' :values='values')
	.radio-buttons(
		v-for='(color, i) in colors'
		:key='color'
	)
		RadioToggleButtons(
			v-model='currentValue'
			:values='values'
			:color='color'
			:selectedTextColor='selectedTextColors[i]'
		)
	p.result {{ currentValue }}
</template>

<script lang="ts">
import Color from 'color';
import randomColor from 'randomcolor';
import { Vue, Component } from 'vue-property-decorator';

const preValues = ['a', 'b', 'c'];

@Component({
	name: 'App'
})
export default class App extends Vue {
	values = preValues.map(value => ({
		label: value.repeat(5).toUpperCase(),
		value
	}));
	currentValue: string = 'b';
	colors: string[] = randomColor({ count: 10 });

	get selectedTextColors() {
		return this.colors.map(color => {
			const isDark = Color(color).isDark();

			return isDark ? '#eee' : '#333';
		});
	}
}
</script>

<style lang="scss">
body {
	padding: 1rem;
}
#demo {
	.radio-buttons {
		margin: 2rem 0;
	}
	.result {
		font-family: serif;
		font-size: 20px;
		padding: 1rem;
		border: 5px dotted blueviolet;

		&::before {
			content: 'Result:';
			font-weight: bold;
			margin-right: 5px;
		}
	}
}
</style>

