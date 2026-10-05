import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { mdsvex } from 'mdsvex';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			extensions: ['.svelte', '.md'],
			preprocess: [mdsvex({ extensions: ['.md'], layout: fileURLToPath(new URL('src/lib/content/layout.svelte', import.meta.url)) })],
			compilerOptions: {
				// Force runes mode for the project, except for libraries and markdown (mdsvex emits legacy syntax).
				// Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') || filename.endsWith('.md') ? undefined : true
			},
			adapter: adapter(),
			paths: { base: process.env.BASE_PATH ?? '' }
		})
	]
});
