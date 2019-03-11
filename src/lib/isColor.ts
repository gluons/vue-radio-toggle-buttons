import Color from 'color';

export default function isColor(color: string): boolean {
	try {
		Color(color);

		return true;
	} catch (_) {
		return false;
	}
}
