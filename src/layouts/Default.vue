<template lang="pug">
#app
	slot
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
	name: 'Default'
})
export default class Default extends Vue {}
</script>
