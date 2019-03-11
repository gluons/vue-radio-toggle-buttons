# Vue Radio Toggle Buttons
[![GitHub](https://img.shields.io/github/license/gluons/vue-radio-toggle-buttons.svg?style=flat-square)](./LICENSE)
[![vue 2](https://img.shields.io/badge/vue-2-42b983.svg?style=flat-square)](https://vuejs.org)
[![npm](https://img.shields.io/npm/v/vue-radio-toggle-buttons.svg?style=flat-square)](https://www.npmjs.com/package/vue-radio-toggle-buttons)
[![npm](https://img.shields.io/npm/dt/vue-radio-toggle-buttons.svg?style=flat-square)](https://www.npmjs.com/package/vue-radio-toggle-buttons)
![npm type definitions](https://img.shields.io/npm/types/vue-radio-toggle-buttons.svg?style=flat-square)
[![Travis (.com)](https://img.shields.io/travis/com/gluons/vue-radio-toggle-buttons.svg?style=flat-square)](https://travis-ci.com/gluons/vue-radio-toggle-buttons)

🔘 Radio toggle buttons for Vue.

## ⚙️ Installation

```bash
npm install vue-radio-toggle-buttons
# or
yarn add vue-radio-toggle-buttons
```

## 🛂 Usage

**main.js:**
```js
import Vue from 'vue';
import VueRadioToggleButtons from 'vue-radio-toggle-buttons';

import App from './App.vue';

Vue.use(VueRadioToggleButtons);

new Vue({
	el: '#app',
	render: h => h(App)
});
```

**App.vue:**
```vue
<template>
	<RadioToggleButtons
		v-model='currentValue'
		:values='values'
		color='purple'
		textColor='#000'
		selectedTextColor='#fff'
	/>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			values: [
				{ label: 'Value 1', value: '1' },
				{ label: 'Value 2', value: '2' },
				{ label: 'Value 3', value: '3' },
			],
			currentValue: ''
		}
	}
};
</script>
```

## 📚 API

### `<RadioToggleButtons>`

#### 🔰 Props

##### `values`
**Type:** `Array<{ label: string, value: string }>`  
**Required:** `true`

Values of radio toggle buttons.

##### `color`
**Type:** `string`  
**Default:** `'#333'`

Primary color of radio toggle buttons.

##### `textColor`
**Type:** `string`  
**Default:** `'#333'`

Text color of radio toggle buttons.

##### `selectedTextColor`
**Type:** `string`  
**Default:** `'#eee'`

Text color of selected item of radio toggle buttons.
