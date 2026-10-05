<script lang="ts">
	import type { Snippet } from 'svelte';
	import { columns, languageName } from './columns.svelte';

	// No children = the language lacks this feature.
	let { lang, children }: { lang: string; children?: Snippet } = $props();
	const order = $derived(columns.left === lang ? 'order-1' : columns.right === lang ? 'order-2' : null);
</script>

{#if order}
	<div {lang} class="space-y-3 {order}">
		<!-- Columns stack below md, so the picker bar no longer labels them. -->
		<div class="text-xs font-semibold tracking-wide text-neutral-500 uppercase md:hidden">
			{languageName(lang)}
		</div>
		{#if children}
			{@render children()}
		{:else}
			<p lang="en" class="text-neutral-500 italic">
				{languageName(lang, 'en')} doesn't have this.
			</p>
		{/if}
	</div>
{/if}
