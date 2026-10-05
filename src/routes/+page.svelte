<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Row from '$lib/Row.svelte';
	import W from '$lib/W.svelte';
	import { setToc } from '$lib/toc';
	import { columns, languages, languageName, pick, show } from '$lib/columns.svelte';

	const toc = setToc([]);

	// The heading most recently scrolled past (below the sticky picker).
	let active = $state('');
	function track() {
		const headings = document.querySelectorAll('h2[id], h3[id]');
		active = [...headings].findLast((h) => h.getBoundingClientRect().top < 120)?.id ?? '';
	}
	$effect(track);
</script>

<svelte:window onscroll={track} />

<svelte:head>
	<title>{languageName(columns.left)} ↔ {languageName(columns.right)}</title>
</svelte:head>

<div class="mx-auto flex max-w-7xl gap-10 px-4">
<main class="min-w-0 flex-1 py-10">
	<header class="mb-2">
		<h1 class="text-3xl font-bold">Language comparison</h1>
	</header>

	<nav
		class="sticky top-0 z-10 mb-8 grid grid-cols-2 gap-x-8 gap-y-2 bg-white/90 py-3 backdrop-blur dark:bg-neutral-950/90"
	>
		<p class="col-span-2 text-sm text-neutral-500">
			<W role="subject">subject</W> · <W role="verb">verb</W> · <W role="object">object</W> ·
			<W role="time">time</W> · <W role="place">place</W> · <W role="link">clause link</W>
		</p>
		{#each ['left', 'right'] as const as side (side)}
			<select
				aria-label="{side} column language"
				class="rounded-md border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900"
				bind:value={() => columns[side], (lang) => pick(side, lang)}
			>
				{#each languages as lang (lang)}
					<option value={lang}>{languageName(lang)}</option>
				{/each}
			</select>
		{/each}
	</nav>

	<Section title="Word order">
		<Row title="Basic order" />
		<Row title="Swapping subject and object" />
		<Row title="Verb-second (V2)" />
		<Row title="Time and place" />
		<Row title="Direction" />
		<Row title="Questions" />
		<Row title="Subordinate clauses" />
		<Row title="Relative clauses" />
	</Section>

	<Section title="Subject omission">
		<Row title="Subject clear from context" />
		<Row title="Dummy subjects" />
	</Section>

	<Section title="Nouns">
		<Row title="Definiteness" />
		<Row title="Plurals" />
	</Section>

	<Section title="Verbs">
		<Row title="Agreement with the subject" />
		<Row title="Past tense" />
		<Row title="Negation" />
	</Section>
</main>

<!-- After <main> in markup so sections have registered; order-first puts it on the left. -->
<aside class="order-first hidden w-56 shrink-0 lg:block">
	<div class="sticky top-0 max-h-screen space-y-8 overflow-y-auto py-10 text-sm">
	<fieldset class="space-y-1 text-neutral-600 dark:text-neutral-400">
		<legend class="mb-2 font-semibold text-neutral-900 dark:text-neutral-100">Show</legend>
		<label class="flex items-center gap-2">
			<input type="checkbox" class="rounded" bind:checked={show.explanations} /> Explanations
		</label>
		<label class="flex items-center gap-2">
			<input type="checkbox" class="rounded" bind:checked={show.translations} /> Translations
		</label>
	</fieldset>
	<nav aria-label="Table of contents">
		<ul class="space-y-4">
			{#each toc as section (section.id)}
				<li>
					<a
						href="#{section.id}"
						aria-current={active === section.id ? 'location' : undefined}
						class="font-semibold hover:underline aria-[current]:text-sky-600 dark:aria-[current]:text-sky-400"
						>{section.title}</a>
					<ul class="mt-2 space-y-1 border-l border-neutral-200 dark:border-neutral-800">
						{#each section.rows as row (row.id)}
							<li>
								<a
									href="#{row.id}"
									aria-current={active === row.id ? 'location' : undefined}
									class="-ml-px block border-l border-transparent pl-3 text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 aria-[current]:border-sky-500 aria-[current]:text-sky-600 dark:aria-[current]:text-sky-400"
									>{row.title}</a
								>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</nav>
	</div>
</aside>
</div>
