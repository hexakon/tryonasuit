<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<div>
	<h3 class="mb-3 text-lg font-medium">{title}</h3>
	<div class="grid gap-8 md:grid-cols-2">{@render children()}</div>
</div>
