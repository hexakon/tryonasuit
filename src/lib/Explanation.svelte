<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<p lang="en" class="leading-relaxed text-neutral-600 dark:text-neutral-400">{@render children()}</p>
