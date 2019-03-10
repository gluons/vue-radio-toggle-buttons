<template lang="pug">
#demo
	.radio-buttons(
		v-for='color in colors'
		:key='color'
	)
		Radio(v-model='value' value='a' :color='color') AAAAA
		Radio(v-model='value' value='b' :color='color') BBBBB
		Radio(v-model='value' value='c' :color='color') CCCCC
	p.result {{ value }}
</template>

<script lang="ts">
import randomColor from 'randomcolor';
import { Vue, Component } from 'vue-property-decorator';

@Component({
	name: 'App'
})
export default class App extends Vue {
	value: string = 'b';
	colors: string[] = randomColor({ count: 10 });
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

