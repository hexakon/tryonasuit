<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<section class="mb-14 space-y-8">
	<h2 class="border-b border-neutral-200 pb-1 text-2xl font-semibold dark:border-neutral-800">
		{title}
	</h2>
	{@render children()}
</section>
