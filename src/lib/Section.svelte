<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getToc, slug } from './toc';

	let { title, children }: { title: string; children: Snippet } = $props();
	// Titles are static.
	// svelte-ignore state_referenced_locally
	const entry = { id: slug(title), title, rows: [] };
	getToc().push(entry);
</script>

<section class="mb-14 space-y-8">
	<h2 id={entry.id} class="scroll-mt-28 border-b border-neutral-200 pb-1 text-2xl font-semibold dark:border-neutral-800">
		{title}
	</h2>
	{@render children()}
</section>
