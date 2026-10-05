<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Demo from '$lib/Demo.svelte';
	import Row from '$lib/Row.svelte';
	import Explanation from '$lib/Explanation.svelte';
	import Example from '$lib/Example.svelte';
	import W from '$lib/W.svelte';
	import { setToc } from '$lib/toc';
	import { columns, languages, languageName, pick, show } from '$lib/columns.svelte';

	const toc = setToc([]);
</script>

<svelte:head>
	<title>{languageName(columns.left)} ↔ {languageName(columns.right)}</title>
</svelte:head>

<div class="mx-auto flex max-w-7xl gap-10 px-4">
<main class="min-w-0 flex-1 py-10">
	<header class="mb-6">
		<h1 class="text-3xl font-bold">Language comparison</h1>
		<p class="mt-2 text-neutral-500">
			<W role="subject">subject</W> · <W role="verb">verb</W> · <W role="object">object</W> ·
			<W role="time">time</W> · <W role="place">place</W> · <W role="link">clause link</W>
		</p>
		<label class="mt-3 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
			<input type="checkbox" class="rounded" bind:checked={show.notes} />
			Show explanations and translations
		</label>
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
					<W role="time">Idag</W> <W role="verb">äter</W> <W role="subject">jag</W> <W role="object">sushi</W>.
				</Example>
				<Example translation="I like eating sushi. (lit. “Sushi eat I gladly.”)">
					<W role="object">Sushi</W> <W role="verb">äter</W> <W role="subject">jag</W> gärna.
				</Example>
			</Demo>
		</Row>

		<Row title="Time and place">
			<Demo lang="en">
				<Explanation>After the object: place, then time.</Explanation>
				<Example>
					<W role="subject">I</W> <W role="verb">eat</W> <W role="object">sushi</W> in <W role="place">Tokyo</W>
					<W role="time">today</W>.
				</Example>
			</Demo>
			<Demo lang="ja">
				<Explanation>Before the verb: usually time, then place, then object.</Explanation>
				<Example translation="I eat sushi in Tokyo today.">
					<W role="subject">私</W>は<W role="time">今日</W><W role="place">東京</W>で<W role="object">寿司</W>を<W role="verb">食べる</W>。
				</Example>
			</Demo>
			<Demo lang="sv">
				<Explanation>After the object: place, then time.</Explanation>
				<Example translation="I eat sushi in Tokyo today.">
					<W role="subject">Jag</W> <W role="verb">äter</W> <W role="object">sushi</W> i <W role="place">Tokyo</W>
					<W role="time">idag</W>.
				</Example>
			</Demo>
		</Row>

		<Row title="Direction">
			<Demo lang="en">
				<Explanation>Prepositions go before the noun.</Explanation>
				<Example>
					<W role="subject">I</W> <W role="verb">am going</W> from <W role="place">Osaka</W> to
					<W role="place">Tokyo</W>.
				</Example>
			</Demo>
			<Demo lang="ja">
				<Explanation>Postpositions go after the noun: から “from”, へ/に “to”.</Explanation>
				<Example translation="I am going from Osaka to Tokyo.">
					<W role="subject">私</W>は<W role="place">大阪</W>から<W role="place">東京</W>へ<W role="verb">行く</W>。
				</Example>
			</Demo>
			<Demo lang="sv">
				<Explanation>Prepositions go before the noun.</Explanation>
				<Example translation="I am going from Osaka to Tokyo.">
					<W role="subject">Jag</W> <W role="verb">åker</W> från <W role="place">Osaka</W> till
					<W role="place">Tokyo</W>.
				</Example>
			</Demo>
		</Row>

		<Row title="Questions">
			<Demo lang="en">
				<Explanation>Yes/no questions add “do” before the subject; question words go first.</Explanation>
				<Example>
					<W role="verb">Do</W> <W role="subject">you</W> <W role="verb">eat</W> <W role="object">sushi</W>?
				</Example>
				<Example>
					<W role="object">What</W> <W role="verb">do</W> <W role="subject">you</W> <W role="verb">eat</W>?
				</Example>
			</Demo>
			<Demo lang="ja">
				<Explanation>Order doesn't change. か marks a question; question words stay in place.</Explanation>
				<Example translation="Do (you) eat sushi?">
					<W role="object">寿司</W>を<W role="verb">食べます</W>か？
				</Example>
				<Example translation="What do (you) eat?">
					<W role="object">何</W>を<W role="verb">食べます</W>か？
				</Example>
			</Demo>
			<Demo lang="sv">
				<Explanation>Yes/no questions start with the verb; question words go first, then V2.</Explanation>
				<Example translation="Do you eat sushi? (lit. “Eat you sushi?”)">
					<W role="verb">Äter</W> <W role="subject">du</W> <W role="object">sushi</W>?
				</Example>
				<Example translation="What do you eat? (lit. “What eat you?”)">
					<W role="object">Vad</W> <W role="verb">äter</W> <W role="subject">du</W>?
				</Example>
			</Demo>
		</Row>

		<Row title="Subordinate clauses">
			<Demo lang="en">
				<Explanation>Same order as a main clause.</Explanation>
				<Example>
					<W role="subject">He</W> <W role="verb">doesn't eat</W> <W role="object">sushi</W>.
				</Example>
				<Example>
					I think <W role="link">that</W> <W role="subject">he</W> <W role="verb">doesn't eat</W>
					<W role="object">sushi</W>.
				</Example>
			</Demo>
			<Demo lang="ja">
				<Explanation>The clause comes before the main verb, closed by と; the main verb stays last.</Explanation>
				<Example translation="He doesn't eat sushi.">
					<W role="subject">彼</W>は<W role="object">寿司</W>を<W role="verb">食べない</W>。
				</Example>
				<Example translation="I think that he doesn't eat sushi.">
					私は<W role="subject">彼</W>が<W role="object">寿司</W>を<W role="verb">食べない</W><W role="link">と</W>思う。
				</Example>
			</Demo>
			<Demo lang="sv">
				<Explanation>No V2 in subclauses, and “inte” (not) moves before the verb.</Explanation>
				<Example translation="He doesn't eat sushi. (lit. “He eats not sushi.”)">
					<W role="subject">Han</W> <W role="verb">äter</W> inte <W role="object">sushi</W>.
				</Example>
				<Example translation="I think that he doesn't eat sushi. (lit. “…that he not eats sushi.”)">
					Jag tror <W role="link">att</W> <W role="subject">han</W> inte <W role="verb">äter</W>
					<W role="object">sushi</W>.
				</Example>
			</Demo>
		</Row>

		<Row title="Relative clauses">
			<Demo lang="en">
				<Explanation>The clause follows the noun, introduced by “that”/“who”.</Explanation>
				<Example>
					<W role="subject">the dog</W> <W role="link">that</W> <W role="verb">bit</W> <W role="object">the man</W>
				</Example>
			</Demo>
			<Demo lang="ja">
				<Explanation>The clause comes before the noun, with no relative pronoun.</Explanation>
				<Example translation="the dog that bit the man">
					<W role="object">男</W>を<W role="verb">噛んだ</W><W role="subject">犬</W>
				</Example>
			</Demo>
			<Demo lang="sv">
				<Explanation>The clause follows the noun, introduced by “som”.</Explanation>
				<Example translation="the dog that bit the man">
					<W role="subject">hunden</W> <W role="link">som</W> <W role="verb">bet</W> <W role="object">mannen</W>
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
					<W role="verb">Watched</W> <W role="object">a movie</W>.
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
					<W role="verb">Såg</W> <W role="object">en film</W>.
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

<!-- After <main> in markup so sections have registered; order-first puts it on the left. -->
<aside class="order-first hidden w-56 shrink-0 lg:block">
	<nav aria-label="Table of contents" class="sticky top-0 max-h-screen overflow-y-auto py-10 text-sm">
		<ul class="space-y-4">
			{#each toc as section (section.id)}
				<li>
					<a href="#{section.id}" class="font-semibold hover:underline">{section.title}</a>
					<ul class="mt-2 space-y-1 border-l border-neutral-200 dark:border-neutral-800">
						{#each section.rows as row (row.id)}
							<li>
								<a
									href="#{row.id}"
									class="-ml-px block border-l border-transparent pl-3 text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
									>{row.title}</a
								>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</nav>
</aside>
</div>
