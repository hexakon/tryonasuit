<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Demo from '$lib/Demo.svelte';
	import Explanation from '$lib/Explanation.svelte';
	import Example from '$lib/Example.svelte';
	import W from '$lib/W.svelte';
	import { columns, languages, languageName, pick } from '$lib/columns.svelte';
</script>

<svelte:head>
	<title>{languageName(columns.left)} ↔ {languageName(columns.right)}</title>
</svelte:head>

<main class="mx-auto max-w-5xl px-4 py-10">
	<header class="mb-6">
		<h1 class="text-3xl font-bold">Language comparison</h1>
		<p class="mt-2 text-neutral-500">
			<W role="subject">subject</W> · <W role="verb">verb</W> · <W role="object">object</W>
		</p>
	</header>

	<nav
		class="sticky top-0 z-10 mb-8 grid grid-cols-2 gap-8 bg-white/90 py-3 backdrop-blur dark:bg-neutral-950/90"
	>
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
		<Demo lang="en">
			<Explanation>
				English is <strong>SVO</strong>: subject, then verb, then object. With almost no case
				marking, word order is what tells you who did what to whom.
			</Explanation>
			<Example><W role="subject">I</W> <W role="verb">eat</W> <W role="object">sushi</W>.</Example>
			<Example>
				<W role="subject">The dog</W> <W role="verb">bit</W> <W role="object">the man</W>.
			</Example>
			<Explanation>Swap the nouns and the meaning flips:</Explanation>
			<Example>
				<W role="subject">The man</W> <W role="verb">bit</W> <W role="object">the dog</W>.
			</Example>
		</Demo>

		<Demo lang="ja">
			<Explanation>
				Japanese is <strong>SOV</strong>: the verb comes last. Particles mark each noun's role —
				は/が for the subject, を for the object.
			</Explanation>
			<Example translation="I eat sushi.">
				<W role="subject">私</W>は<W role="object">寿司</W>を<W role="verb">食べる</W>。
			</Example>
			<Example translation="The dog bit the man.">
				<W role="subject">犬</W>が<W role="object">男</W>を<W role="verb">噛んだ</W>。
			</Example>
			<Explanation>
				Because the particles carry the roles, the nouns can be reordered without changing who did
				what. Only the verb has to stay at the end:
			</Explanation>
			<Example translation="The dog bit the man. (the man is emphasized)">
				<W role="object">男</W>を<W role="subject">犬</W>が<W role="verb">噛んだ</W>。
			</Example>
		</Demo>

		<Demo lang="sv">
			<Explanation>
				Swedish is <strong>SVO</strong> like English, with almost no case marking on nouns.
			</Explanation>
			<Example translation="I eat sushi.">
				<W role="subject">Jag</W> <W role="verb">äter</W> <W role="object">sushi</W>.
			</Example>
			<Example translation="The dog bit the man.">
				<W role="subject">Hunden</W> <W role="verb">bet</W> <W role="object">mannen</W>.
			</Example>
			<Explanation>
				But main clauses are also <strong>verb-second (V2)</strong>: the verb must be the second
				element. Put something else first and the subject moves behind the verb:
			</Explanation>
			<Example translation="Today I eat sushi. (lit. “Today eat I sushi.”)">
				Idag <W role="verb">äter</W> <W role="subject">jag</W> <W role="object">sushi</W>.
			</Example>
			<Example translation="I like eating sushi. (lit. “Sushi eat I gladly.”)">
				<W role="object">Sushi</W> <W role="verb">äter</W> <W role="subject">jag</W> gärna.
			</Example>
		</Demo>
	</Section>

	<Section title="Subject omission">
		<Demo lang="en">
			<Explanation>
				English requires an explicit subject in almost every clause, even when it's obvious from
				context.
			</Explanation>
			<Example>
				What did you do yesterday? — <W role="subject">I</W>
				<W role="verb">watched</W> <W role="object">a movie</W>.
			</Example>
			<Explanation>
				Dropping it sounds clipped, acceptable only in casual speech or diary style:
			</Explanation>
			<Example>?<W role="verb">Watched</W> <W role="object">a movie</W>.</Example>
			<Explanation>
				When there's no real subject, a dummy <em>it</em> or <em>there</em> fills the slot:
			</Explanation>
			<Example><W role="subject">It</W> <W role="verb">is raining</W>.</Example>
		</Demo>

		<Demo lang="ja">
			<Explanation>
				Subjects (and objects) are routinely dropped when clear from context. Stating them can sound
				unnatural or emphatic.
			</Explanation>
			<Example translation="What did you do yesterday? — (I) watched a movie.">
				昨日何をした？ — <W role="object">映画</W>を<W role="verb">見た</W>。
			</Example>
			<Explanation>
				There are no dummy subjects. Weather takes a real one, literally “rain is falling”:
			</Explanation>
			<Example translation="It is raining.">
				<W role="subject">雨</W>が<W role="verb">降っている</W>。
			</Example>
		</Demo>

		<Demo lang="sv">
			<Explanation>
				Like English, Swedish requires an explicit subject in almost every clause.
			</Explanation>
			<Example translation="What did you do yesterday? — I watched a movie.">
				Vad gjorde du igår? — <W role="subject">Jag</W>
				<W role="verb">såg</W> <W role="object">en film</W>.
			</Example>
			<Explanation>Dropping it is only acceptable in casual speech or diary style:</Explanation>
			<Example translation="Watched a movie.">?<W role="verb">Såg</W> <W role="object">en film</W>.</Example>
			<Explanation>
				When there's no real subject, a dummy <em>det</em> (“it”) fills the slot:
			</Explanation>
			<Example translation="It is raining.">
				<W role="subject">Det</W> <W role="verb">regnar</W>.
			</Example>
		</Demo>
	</Section>
</main>
