<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<section class="mb-14">
	<h2 class="mb-4 border-b border-neutral-200 pb-1 text-xl font-semibold dark:border-neutral-800">
		{title}
	</h2>
	<div class="grid gap-8 md:grid-cols-2">{@render children()}</div>
</section>
