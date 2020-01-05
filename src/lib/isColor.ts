import Color from 'color';

export default function isColor(color: string): boolean {
	if (typeof color !== 'string' || color.length === 0) {
		return false;
	}

	try {
		Color(color);

		return true;
	} catch (_) {
		return false;
	}
}
