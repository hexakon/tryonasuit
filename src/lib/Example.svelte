<script lang="ts">
	import type { Snippet } from 'svelte';

	let { translation, children }: { translation?: string; children: Snippet } = $props();
</script>

<figure class="rounded-md bg-neutral-100 px-4 py-3 dark:bg-neutral-900">
	<p class="text-lg">{@render children()}</p>
	{#if translation}
		<figcaption lang="en" class="mt-1 text-sm text-neutral-500 italic">{translation}</figcaption>
	{/if}
</figure>
