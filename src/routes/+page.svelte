<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Demo from '$lib/Demo.svelte';
	import Row from '$lib/Row.svelte';
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
		<Row title="Basic order">
			<Demo lang="en">
				<Explanation>Subject–verb–object.</Explanation>
				<Example>
					<W role="subject">I</W> <W role="verb">eat</W> <W role="object">sushi</W>.
				</Example>
				<Example>
					<W role="subject">The dog</W> <W role="verb">bit</W> <W role="object">the man</W>.
				</Example>
			</Demo>
			<Demo lang="ja">
				<Explanation>Subject–object–verb. Particles mark roles: は/が subject, を object.</Explanation>
				<Example translation="I eat sushi.">
					<W role="subject">私</W>は<W role="object">寿司</W>を<W role="verb">食べる</W>。
				</Example>
				<Example translation="The dog bit the man.">
					<W role="subject">犬</W>が<W role="object">男</W>を<W role="verb">噛んだ</W>。
				</Example>
			</Demo>
			<Demo lang="sv">
				<Explanation>Subject–verb–object.</Explanation>
				<Example translation="I eat sushi.">
					<W role="subject">Jag</W> <W role="verb">äter</W> <W role="object">sushi</W>.
				</Example>
				<Example translation="The dog bit the man.">
					<W role="subject">Hunden</W> <W role="verb">bet</W> <W role="object">mannen</W>.
				</Example>
			</Demo>
		</Row>

		<Row title="Swapping subject and object">
			<Demo lang="en">
				<Explanation>Meaning flips.</Explanation>
				<Example>
					<W role="subject">The man</W> <W role="verb">bit</W> <W role="object">the dog</W>.
				</Example>
			</Demo>
			<Demo lang="ja">
				<Explanation>Particles keep the roles; the fronted noun is emphasized.</Explanation>
				<Example translation="The dog bit the man.">
					<W role="object">男</W>を<W role="subject">犬</W>が<W role="verb">噛んだ</W>。
				</Example>
			</Demo>
			<Demo lang="sv">
				<Explanation>Meaning flips.</Explanation>
				<Example translation="The man bit the dog.">
					<W role="subject">Mannen</W> <W role="verb">bet</W> <W role="object">hunden</W>.
				</Example>
			</Demo>
		</Row>

		<Row title="Verb-second (V2)">
			<Demo lang="en" />
			<Demo lang="ja" />
			<Demo lang="sv">
				<Explanation>The verb is always second; fronting something else puts the subject after it.</Explanation>
				<Example translation="Today I eat sushi. (lit. “Today eat I sushi.”)">
					Idag <W role="verb">äter</W> <W role="subject">jag</W> <W role="object">sushi</W>.
				</Example>
				<Example translation="I like eating sushi. (lit. “Sushi eat I gladly.”)">
					<W role="object">Sushi</W> <W role="verb">äter</W> <W role="subject">jag</W> gärna.
				</Example>
			</Demo>
		</Row>
	</Section>

	<Section title="Subject omission">
		<Row title="Subject clear from context">
			<Demo lang="en">
				<Example>
					What did you do yesterday? — <W role="subject">I</W>
					<W role="verb">watched</W> <W role="object">a movie</W>.
				</Example>
				<Explanation>Dropping it is casual or diary style only:</Explanation>
				<Example>
					?<W role="verb">Watched</W> <W role="object">a movie</W>.
				</Example>
			</Demo>
			<Demo lang="ja">
				<Explanation>Left out when clear from context.</Explanation>
				<Example translation="What did you do yesterday? — (I) watched a movie.">
					昨日何をした？ — <W role="object">映画</W>を<W role="verb">見た</W>。
				</Example>
			</Demo>
			<Demo lang="sv">
				<Example translation="What did you do yesterday? — I watched a movie.">
					Vad gjorde du igår? — <W role="subject">Jag</W>
					<W role="verb">såg</W> <W role="object">en film</W>.
				</Example>
				<Explanation>Dropping it is casual or diary style only:</Explanation>
				<Example translation="Watched a movie.">
					?<W role="verb">Såg</W> <W role="object">en film</W>.
				</Example>
			</Demo>
		</Row>

		<Row title="Dummy subjects">
			<Demo lang="en">
				<Example><W role="subject">It</W> <W role="verb">is raining</W>.</Example>
				<Example><W role="subject">There</W> <W role="verb">is</W> a cat.</Example>
			</Demo>
			<Demo lang="ja">
				<Explanation>No dummy subjects; the real subject fills the slot.</Explanation>
				<Example translation="It is raining. (lit. “Rain is falling.”)">
					<W role="subject">雨</W>が<W role="verb">降っている</W>。
				</Example>
				<Example translation="There is a cat. (lit. “A cat exists.”)">
					<W role="subject">猫</W>が<W role="verb">いる</W>。
				</Example>
			</Demo>
			<Demo lang="sv">
				<Example translation="It is raining.">
					<W role="subject">Det</W> <W role="verb">regnar</W>.
				</Example>
				<Example translation="There is a cat.">
					<W role="subject">Det</W> <W role="verb">finns</W> en katt.
				</Example>
			</Demo>
		</Row>
	</Section>
</main>
