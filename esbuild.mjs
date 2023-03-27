import fs from 'fs/promises';
import glob from 'glob';
import * as esbuild from 'esbuild';

await fs.rm('dist', { recursive: true, force: true });

const sourceFiles = await glob('src/**/*.ts');

await esbuild.build({
	entryPoints: sourceFiles,
	outdir: 'dist/esm',
	format: 'esm',
});

await esbuild.build({
	entryPoints: sourceFiles,
	outdir: 'dist/cjs',
	format: 'cjs',
});
