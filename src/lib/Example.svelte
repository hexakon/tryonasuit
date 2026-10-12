<script lang="ts">
	import type { Snippet } from 'svelte';
	import { show } from './columns.svelte';

	let {
		translation,
		explanation,
		children
	}: { translation?: string; explanation?: string; children: Snippet } = $props();
</script>

<figure class="relative rounded-md bg-neutral-100 px-4 py-3 dark:bg-neutral-900 {explanation ? 'pr-12' : ''}">
	<p class="text-lg">{@render children()}</p>
	{#if translation && show.translations}
		<figcaption lang="en" class="mt-1 text-sm text-neutral-500 italic">{translation}</figcaption>
	{/if}
	{#if explanation}
		<!-- The sidebar checkbox opens or closes all of them; each can still be toggled on its own. -->
		<details open={show.explanations} class="group text-sm open:mt-2">
			<summary
				aria-label="Explanation"
				title="Explanation"
				class="absolute top-3 right-3 grid size-6 cursor-pointer list-none place-items-center rounded-full border border-neutral-400 text-xs text-neutral-500 group-open:border-sky-600 group-open:bg-sky-600 group-open:text-white [&::-webkit-details-marker]:hidden"
				>?</summary
			>
			<p lang="en" class="leading-relaxed text-neutral-600 dark:text-neutral-400">{explanation}</p>
		</details>
	{/if}
</figure>
