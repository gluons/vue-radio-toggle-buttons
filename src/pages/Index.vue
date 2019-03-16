<template lang="pug">
Layout: #home
	p {{ text }}
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
