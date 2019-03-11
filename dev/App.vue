<template lang="pug">
#demo
	.radio-buttons(
		v-for='(color, i) in colors'
		:key='color'
	)
		Radio(
			v-model='value'
			value='a'
			:color='color'
			:selectedTextColor='selectedTextColors[i]'
		) AAAAA
		Radio(
			v-model='value'
			value='b'
			:color='color'
			:selectedTextColor='selectedTextColors[i]'
		) BBBBB
		Radio(
			v-model='value'
			value='c'
			:color='color'
			:selectedTextColor='selectedTextColors[i]'
		) CCCCC
	p.result {{ value }}
</template>

<script lang="ts">
import Color from 'color';
import randomColor from 'randomcolor';
import { Vue, Component } from 'vue-property-decorator';

@Component({
	name: 'App'
})
export default class App extends Vue {
	value: string = 'b';
	colors: string[] = randomColor({ count: 10 });

	get selectedTextColors() {
		const { colors } = this;

		return colors.map(color => {
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

