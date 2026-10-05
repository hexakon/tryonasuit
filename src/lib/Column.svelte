<script lang="ts" module>
	import { createContext } from 'svelte';

	export const [getColumn, setColumn] = createContext<{ lang: string; row: string }>();
</script>

<script lang="ts">
	import { content, languageName } from './columns.svelte';

	let { lang, row }: { lang: string; row: string } = $props();
	setColumn({
		get lang() {
			return lang;
		},
		get row() {
			return row;
		}
	});
	const Content = $derived(content[lang]);
</script>

<div lang={lang} class="space-y-3">
	<!-- Columns stack below md, so the picker bar no longer labels them. -->
	<div class="text-xs font-semibold tracking-wide text-neutral-500 uppercase md:hidden">
		{languageName(lang)}
	</div>
	<!-- ponytail: renders the whole language file per row and Demo filters; split files per row if it gets slow. -->
	<Content />
</div>
