<template lang="pug">
#app
	github-corners(
		repo='gluons/vue-radio-toggle-buttons'
		bg-color='deeppink'
	)
	slot
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
	name: 'Default'
})
export default class Default extends Vue {}
</script>

<style>
#app {
	margin: 1rem;
}
</style>
