<script lang="ts">
	import type { Snippet } from 'svelte';

	// Full class names so Tailwind picks them up.
	const colors = {
		subject: 'text-sky-600 dark:text-sky-400',
		verb: 'text-rose-600 dark:text-rose-400',
		object: 'text-emerald-600 dark:text-emerald-400',
		time: 'text-amber-600 dark:text-amber-400',
		place: 'text-violet-600 dark:text-violet-400',
		link: 'text-fuchsia-600 dark:text-fuchsia-400'
	};

	let { role, children }: { role: keyof typeof colors; children: Snippet } = $props();
</script>

<span class="font-semibold {colors[role]}">{@render children()}</span>
