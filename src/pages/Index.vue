<template lang="pug">
Layout: #home
	header
		h1.main-title #[V]ue Radio Toggle Buttons
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
	name: 'Index',
	metaInfo: {
		title: 'Home'
	}
} as any)
export default class Index extends Vue {
	text: string = 'Hi';
}
</script>

<style lang="scss">
#home {
	margin-top: 5rem;

	.main-title {
		text-align: center;
	}
}
</style>
