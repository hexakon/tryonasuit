<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getColumn } from './Column.svelte';
	import { languageName } from './columns.svelte';

	// No children = the language lacks this feature.
	let { row, children }: { row: string; children?: Snippet } = $props();
	const column = getColumn();
</script>

{#if row === column.row}
	{#if children}
		{@render children()}
	{:else}
		<p lang="en" class="text-neutral-500 italic">
			{languageName(column.lang, 'en')} doesn't have this.
		</p>
	{/if}
{/if}
