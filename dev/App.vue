<template lang="pug">
#demo
	#radio-buttons
		Radio(value='a' v-model='value') AAAAA
		Radio(value='b' v-model='value') BBBBB
		Radio(value='c' v-model='value') CCCCC
	p#result {{ value }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
	name: 'App'
})
export default class App extends Vue {
	value: string = 'a';
}
</script>

<style lang="scss">
body {
	padding: 1rem;
}
#demo {
	#radio-buttons {
		margin: 2rem 0;
	}
	#result {
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

