<script lang="ts">
	import type { Snippet } from 'svelte';

	let { lang, children }: { lang: string; children: Snippet } = $props();
	const name = $derived(new Intl.DisplayNames([lang], { type: 'language' }).of(lang));
</script>

<div {lang} class="space-y-3">
	<div class="text-xs font-semibold tracking-wide text-neutral-500 uppercase">{name}</div>
	{@render children()}
</div>
