import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { mdsvex } from 'mdsvex';

type MdNode = { type: string; depth?: number; value?: string; children?: MdNode[] };

/** Wraps everything under each ## / ### / #### heading of content.md in Section / Row / Demo. */
function headingsToComponents() {
	const tags: Record<number, [string, string]> = { 2: ['Section', 'title'], 3: ['Row', 'title'], 4: ['Demo', 'lang'] };
	const text = (n: MdNode): string => n.value ?? n.children?.map(text).join('') ?? '';
	return (tree: MdNode) => {
		const out: MdNode[] = [];
		const open: { depth: number; tag: string }[] = [];
		const close = (depth: number) => {
			while (open.length && open.at(-1)!.depth >= depth) out.push({ type: 'html', value: `</${open.pop()!.tag}>` });
		};
		for (const node of tree.children ?? []) {
			const wrap = node.type === 'heading' ? tags[node.depth!] : undefined;
			if (!wrap) {
				out.push(node);
				continue;
			}
			close(node.depth!);
			out.push({ type: 'html', value: `<${wrap[0]} ${wrap[1]}="${text(node).replaceAll('"', '&quot;')}">` });
			open.push({ depth: node.depth!, tag: wrap[0] });
		}
		close(0);
		tree.children = out;
	};
}

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			extensions: ['.svelte', '.md'],
			preprocess: [
				mdsvex({
					extensions: ['.md'],
					remarkPlugins: [headingsToComponents]
				})
			],
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
