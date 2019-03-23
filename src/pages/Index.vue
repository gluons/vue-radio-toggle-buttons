<template lang="pug">
Layout: #home
	header
		h1.main-title #[V]ue Radio Toggle Buttons
		p.desc Radio toggle buttons for Vue.
		.gh-btns
			gh-btns-star(
				slug='gluons/vue-radio-toggle-buttons'
				show-count
			)
			gh-btns-fork(
				slug='gluons/vue-radio-toggle-buttons'
				show-count
			)
	hr.divider
	main
		section
			h2 Installation
			highlight-code(lang='bash').
				npm install vue-radio-toggle-buttons
				# or
				yarn add vue-radio-toggle-buttons
		section
			h2 Demo
			p
				RadioToggleButtons(
					v-model='currentValue'
					:values='values'
					color='purple'
				)
			p.result {{ selectedItemLabel }}
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
	values = [
		{ label: 'Value 1', value: '1' },
		{ label: 'Value 2', value: '2' },
		{ label: 'Value 3', value: '3' },
		{ label: 'Value 4', value: '4' },
		{ label: 'Value 5', value: '5' }
	];
	currentValue = '1';

	get selectedItemLabel() {
		const selectedItem = this.values.find(
			({ value }) => value === this.currentValue
		);

		return selectedItem ? selectedItem.label : '<No Selected Item>';
	}
}
</script>

<style lang="scss">
#home {
	margin-top: 5rem;

	header {
		margin: 3rem 0;

		.main-title,
		.desc {
			text-align: center;
		}
		.desc {
			font-size: 1.2em;
			margin-top: -0.5em;
		}
		.gh-btns {
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
		.gh-button-container {
			float: unset;
			margin: 0 1em;
		}
	}
	.result {
		margin: 2rem 0;
		padding: 1rem;
		border: 0.25rem dotted deeppink;
		border-radius: 0.25rem;

		&::before {
			content: 'Selected Item:';
			font-weight: bold;
			margin-right: 0.5rem;
		}
	}
}
</style>
