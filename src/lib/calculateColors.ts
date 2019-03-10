import Color from 'color';

export default function calculateColors(color: string) {
	try {
		const mainColor = Color(color);

		let textColor: string;
		let borderColor: string;
		let selectedTextColor: string;
		let selectedBgColor: string;
		let selectedHoverColor: string;

		if (mainColor.isDark()) {
			textColor = mainColor.string();
			borderColor = mainColor.fade(0.8).string();
			selectedTextColor = '#fff';
			selectedBgColor = mainColor.string();
			selectedHoverColor = mainColor.fade(0.5).string();
		} else {
			textColor = '#000';
			borderColor = mainColor.darken(0.1).string();
			selectedTextColor = mainColor.negate().string();
			selectedBgColor = mainColor.string();
			selectedHoverColor = mainColor.darken(0.1).string();
		}

		return {
			textColor,
			borderColor,
			selectedTextColor,
			selectedBgColor,
			selectedHoverColor
		};
	} catch (_) {
		return null;
	}
}
