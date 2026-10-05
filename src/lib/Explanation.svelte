<script lang="ts">
	import type { Snippet } from 'svelte';
	import { show } from './columns.svelte';

	let { children }: { children: Snippet } = $props();
</script>

{#if show.notes}
	<p lang="en" class="leading-relaxed text-neutral-600 dark:text-neutral-400">{@render children()}</p>
{/if}
