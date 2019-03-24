<template lang="pug">
Layout: #home
	header
		h1.main-title #[V]ue Radio Toggle Buttons
		p.desc Radio toggle buttons for Vue.
		ClientOnly: .gh-btns
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
			.demo-container
				.radio-btns
					RadioToggleButtons(
						v-model='currentValue'
						:values='values'
						:color='mainColor'
						:textColor='textColors.textColors'
						:selectedTextColor='textColors.selectedTextColor'
					)
				.result {{ selectedItemLabel }}
</template>

<script lang="ts">
import Color from 'color';
import randomColor from 'randomcolor';
import { Vue, Component } from 'vue-property-decorator';

const maxValue = 5;
const randValue = Math.floor(Math.random() * maxValue) + 1;

@Component({
	name: 'Index',
	metaInfo: {
		title: 'Home'
	}
} as any)
export default class Index extends Vue {
	values = [...Array(maxValue).keys()].map(i => ({
		label: `Value ${i + 1}`,
		value: `${i + 1}`
	}));
	currentValue = `${randValue}`;
	mainColor = randomColor();

	get textColors() {
		const mainColor = Color(this.mainColor);
		const isDark = mainColor.isDark();

		return {
			textColor: isDark ? '#333' : '#eee',
			selectedTextColor: isDark ? '#eee' : '#333'
		};
	}
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
	.demo-container {
		border: 0.25rem dotted deeppink;
		border-radius: 0.25rem;
		padding: 2rem;

		& > * + * {
			margin-top: 2rem;
		}
		.radio-btns {
			display: flex;
			justify-content: center;
		}
		.result {
			display: flex;
			justify-content: center;

			&::before {
				content: 'Selected Item:';
				font-weight: bold;
				margin-right: 0.5rem;
			}
		}
	}
}
</style>
