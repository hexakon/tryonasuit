<script lang="ts" module>
	// Plain markdown paragraphs in the language files are explanations.
	export { default as p } from '../Explanation.svelte';
</script>

<script lang="ts">
	let { children } = $props();
</script>

{@render children()}
