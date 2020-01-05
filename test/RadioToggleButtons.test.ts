import { mount } from '@vue/test-utils';

import VueRadioToggleButtons from '../dist/vue-radio-toggle-buttons.es';

const { RadioToggleButtons } = VueRadioToggleButtons.components;

const values = ['a', 'b', 'c'].map(value => ({
	label: value.repeat(5).toUpperCase(),
	value
}));

describe('RadioToggleButtons', () => {
	const wrapper = mount(RadioToggleButtons, {
		propsData: {
			values,
			color: 'purple'
		}
	});

	it('should contain expected props', () => {
		const { vm }: { vm: any } = wrapper;

		expect(wrapper.props('values')).toEqual(values);
		expect(vm.actualColor).toEqual('purple');
		expect(vm.actualTextColor).toEqual('#333');
		expect(vm.actualSelectedTextColor).toEqual('#eee');
	});

	it('should render expected DOM', () => {
		expect(wrapper.is('span')).toBe(true);
		expect(wrapper.find('label').exists()).toBe(true);
		expect(wrapper.find('label').classes('radio-toggle-button')).toBe(true);
		expect(wrapper.contains('label input[type=radio]')).toBe(true);
	});
});
