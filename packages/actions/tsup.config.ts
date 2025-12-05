import { createTsupConfig } from '../../tsup.config.js';

export default createTsupConfig({
	entry: ['src/index.ts', 'src/formatTag/index.ts'],
	dts: false,
	format: 'esm',
	minify: 'terser',
	target: 'esnext',
});
