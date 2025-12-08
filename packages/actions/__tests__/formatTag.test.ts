import { describe, expect, test } from 'vitest';
import { formatTag } from '../src/index.js';

describe('Format Tag', () => {
	test('GIVEN tag with no prefix THEN return tag', () => {
		expect(formatTag('3.46.0')).toEqual({
			isSubpackage: false,
			package: 'adb.js',
			semver: '3.46.0',
		});
		expect(formatTag('4.25.0')).toEqual({
			isSubpackage: false,
			package: 'adb.js',
			semver: '4.25.0',
		});
		expect(formatTag('create-adb@1.0.0')).toEqual({
			isSubpackage: false,
			package: 'create-adb',
			semver: '1.0.0',
		});
	});

	test('GIVEN no or invalid tag THEN return null', () => {
		expect(formatTag('')).toEqual(null);
		expect(formatTag('abc')).toEqual(null);
	});
});
