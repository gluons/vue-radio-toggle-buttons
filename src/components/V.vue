<template lang="pug">
span.v-char V
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
	name: 'V'
})
export default class V extends Vue {}
</script>

<style lang="scss">
.v-char {
	display: inline-block;
	background-image: url('../assets/Vue.svg');
	background-position: center center;
	background-size: contain;
	background-repeat: no-repeat;
	color: transparent;
	text-align: center;
	width: 2em;
	height: 2em;
	margin-right: -0.25em;

	&::selection {
		color: initial !important;
	}
}
</style>
