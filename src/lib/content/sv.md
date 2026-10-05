<script>
	import { Demo, Example, W } from '$lib';
</script>

<!-- Word order -->

<Demo row="Basic order">

Subject–verb–object.

<Example translation="I eat sushi.">
	<W role="subject">Jag</W> <W role="verb">äter</W> <W role="object">sushi</W>.
</Example>
<Example translation="The dog bit the man.">
	<W role="subject">Hunden</W> <W role="verb">bet</W> <W role="object">mannen</W>.
</Example>

</Demo>

<Demo row="Swapping subject and object">

Meaning flips.

<Example translation="The man bit the dog.">
	<W role="subject">Mannen</W> <W role="verb">bet</W> <W role="object">hunden</W>.
</Example>

</Demo>

<Demo row="Verb-second (V2)">

The verb is always second; fronting something else puts the subject after it.

<Example translation="Today I eat sushi. (lit. “Today eat I sushi.”)">
	<W role="time">Idag</W> <W role="verb">äter</W> <W role="subject">jag</W> <W role="object">sushi</W>.
</Example>
<Example translation="I like eating sushi. (lit. “Sushi eat I gladly.”)">
	<W role="object">Sushi</W> <W role="verb">äter</W> <W role="subject">jag</W> gärna.
</Example>

</Demo>

<Demo row="Time and place">

After the object: place, then time.

<Example translation="I eat sushi in Tokyo today.">
	<W role="subject">Jag</W> <W role="verb">äter</W> <W role="object">sushi</W> i <W role="place">Tokyo</W>
	<W role="time">idag</W>.
</Example>

</Demo>

<Demo row="Direction">

Prepositions go before the noun.

<Example translation="I am going from Osaka to Tokyo.">
	<W role="subject">Jag</W> <W role="verb">åker</W> från <W role="place">Osaka</W> till
	<W role="place">Tokyo</W>.
</Example>

</Demo>

<Demo row="Questions">

Yes/no questions start with the verb; question words go first, then V2.

<Example translation="Do you eat sushi? (lit. “Eat you sushi?”)">
	<W role="verb">Äter</W> <W role="subject">du</W> <W role="object">sushi</W>?
</Example>
<Example translation="What do you eat? (lit. “What eat you?”)">
	<W role="object">Vad</W> <W role="verb">äter</W> <W role="subject">du</W>?
</Example>

</Demo>

<Demo row="Subordinate clauses">

No V2 in subclauses, and “inte” (not) moves before the verb.

<Example translation="He doesn't eat sushi. (lit. “He eats not sushi.”)">
	<W role="subject">Han</W> <W role="verb">äter</W> inte <W role="object">sushi</W>.
</Example>
<Example translation="I think that he doesn't eat sushi. (lit. “…that he not eats sushi.”)">
	Jag tror <W role="link">att</W> <W role="subject">han</W> inte <W role="verb">äter</W>
	<W role="object">sushi</W>.
</Example>

</Demo>

<Demo row="Relative clauses">

The clause follows the noun, introduced by “som”.

<Example translation="the dog that bit the man">
	<W role="subject">hunden</W> <W role="link">som</W> <W role="verb">bet</W> <W role="object">mannen</W>
</Example>

</Demo>

<!-- Subject omission -->

<Demo row="Subject clear from context">

<Example translation="What did you do yesterday? — I watched a movie.">
	Vad gjorde du igår? — <W role="subject">Jag</W>
	<W role="verb">såg</W> <W role="object">en film</W>.
</Example>

Dropping it is casual or diary style only:

<Example translation="Watched a movie.">
	<W role="verb">Såg</W> <W role="object">en film</W>.
</Example>

</Demo>

<Demo row="Dummy subjects">

<Example translation="It is raining.">
	<W role="subject">Det</W> <W role="verb">regnar</W>.
</Example>
<Example translation="There is a cat.">
	<W role="subject">Det</W> <W role="verb">finns</W> en katt.
</Example>

</Demo>

<!-- Nouns -->

<Demo row="Definiteness">

“en” or “ett” (by gender) before the noun for new; a suffix for known.

<Example translation="A dog is barking.">
	<W role="subject">En hund</W> <W role="verb">skäller</W>.
</Example>
<Example translation="The dog is barking.">
	<W role="subject">Hunden</W> <W role="verb">skäller</W>.
</Example>

</Demo>

<Demo row="Plurals">

The ending depends on the noun (hundar, katter, hus); some don't change.

<Example translation="There is a dog.">
	<W role="subject">Det</W> <W role="verb">finns</W> en hund.
</Example>
<Example translation="There are two dogs.">
	<W role="subject">Det</W> <W role="verb">finns</W> två hundar.
</Example>

</Demo>

<!-- Verbs -->

<Demo row="Agreement with the subject">

The verb never changes for the subject.

<Example translation="I eat sushi.">
	<W role="subject">Jag</W> <W role="verb">äter</W> <W role="object">sushi</W>.
</Example>
<Example translation="She eats sushi.">
	<W role="subject">Hon</W> <W role="verb">äter</W> <W role="object">sushi</W>.
</Example>

</Demo>

<Demo row="Past tense">

Usually -de or -te, with many irregulars.

<Example translation="I watched a movie.">
	<W role="subject">Jag</W> <W role="verb">tittade</W> på <W role="object">en film</W>.
</Example>
<Example translation="I ate sushi.">
	<W role="subject">Jag</W> <W role="verb">åt</W> <W role="object">sushi</W>.
</Example>

</Demo>

<Demo row="Negation">

“inte” after the verb (before it in subclauses).

<Example translation="I don't eat sushi. (lit. “I eat not sushi.”)">
	<W role="subject">Jag</W> <W role="verb">äter</W> inte <W role="object">sushi</W>.
</Example>

</Demo>
