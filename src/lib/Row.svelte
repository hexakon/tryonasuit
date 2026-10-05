<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getToc, slug } from './toc';

	let { title, children }: { title: string; children: Snippet } = $props();
	// Titles are static.
	// svelte-ignore state_referenced_locally
	const entry = { id: slug(title), title, rows: [] };
	getToc().at(-1)?.rows.push(entry);
</script>

<div>
	<h3 id={entry.id} class="scroll-mt-20 mb-3 text-lg font-medium">{title}</h3>
	<div class="grid gap-8 md:grid-cols-2">{@render children()}</div>
</div>
