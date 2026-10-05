<script lang="ts">
	import Column from './Column.svelte';
	import { columns } from './columns.svelte';
	import { getToc, slug } from './toc';

	let { title }: { title: string } = $props();
	// Titles are static.
	// svelte-ignore state_referenced_locally
	const entry = { id: slug(title), title, rows: [] };
	getToc().at(-1)?.rows.push(entry);
</script>

<div>
	<h3 id={entry.id} class="scroll-mt-28 mb-3 text-lg font-medium">{title}</h3>
	<div class="grid gap-8 md:grid-cols-2">
		{#each [columns.left, columns.right] as lang (lang)}
			<Column {lang} row={title} />
		{/each}
	</div>
</div>
