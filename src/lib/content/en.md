<script>
	import { Demo, Example, W } from '$lib';
</script>

<!-- Word order -->

<Demo row="Basic order">

Subject–verb–object.

<Example>
	<W role="subject">I</W> <W role="verb">eat</W> <W role="object">sushi</W>.
</Example>
<Example>
	<W role="subject">The dog</W> <W role="verb">bit</W> <W role="object">the man</W>.
</Example>

</Demo>

<Demo row="Swapping subject and object">

Meaning flips.

<Example>
	<W role="subject">The man</W> <W role="verb">bit</W> <W role="object">the dog</W>.
</Example>

</Demo>

<Demo row="Verb-second (V2)" />

<Demo row="Time and place">

After the object: place, then time.

<Example>
	<W role="subject">I</W> <W role="verb">eat</W> <W role="object">sushi</W> in <W role="place">Tokyo</W>
	<W role="time">today</W>.
</Example>

</Demo>

<Demo row="Direction">

Prepositions go before the noun.

<Example>
	<W role="subject">I</W> <W role="verb">am going</W> from <W role="place">Osaka</W> to
	<W role="place">Tokyo</W>.
</Example>

</Demo>

<Demo row="Questions">

Yes/no questions add “do” before the subject; question words go first.

<Example>
	<W role="verb">Do</W> <W role="subject">you</W> <W role="verb">eat</W> <W role="object">sushi</W>?
</Example>
<Example>
	<W role="object">What</W> <W role="verb">do</W> <W role="subject">you</W> <W role="verb">eat</W>?
</Example>

</Demo>

<Demo row="Subordinate clauses">

Same order as a main clause.

<Example>
	<W role="subject">He</W> <W role="verb">doesn't eat</W> <W role="object">sushi</W>.
</Example>
<Example>
	I think <W role="link">that</W> <W role="subject">he</W> <W role="verb">doesn't eat</W>
	<W role="object">sushi</W>.
</Example>

</Demo>

<Demo row="Relative clauses">

The clause follows the noun, introduced by “that”/“who”.

<Example>
	<W role="subject">the dog</W> <W role="link">that</W> <W role="verb">bit</W> <W role="object">the man</W>
</Example>

</Demo>

<!-- Subject omission -->

<Demo row="Subject clear from context">

<Example>
	What did you do yesterday? — <W role="subject">I</W>
	<W role="verb">watched</W> <W role="object">a movie</W>.
</Example>

Dropping it is casual or diary style only:

<Example>
	<W role="verb">Watched</W> <W role="object">a movie</W>.
</Example>

</Demo>

<Demo row="Dummy subjects">

<Example><W role="subject">It</W> <W role="verb">is raining</W>.</Example>
<Example><W role="subject">There</W> <W role="verb">is</W> a cat.</Example>

</Demo>

<!-- Nouns -->

<Demo row="Definiteness">

Articles go before the noun: “a” new, “the” known.

<Example><W role="subject">A dog</W> <W role="verb">is barking</W>.</Example>
<Example><W role="subject">The dog</W> <W role="verb">is barking</W>.</Example>

</Demo>

<Demo row="Plurals">

Usually -s, with some irregulars (man → men).

<Example><W role="subject">There</W> <W role="verb">is</W> a dog.</Example>
<Example><W role="subject">There</W> <W role="verb">are</W> two dogs.</Example>

</Demo>

<!-- Verbs -->

<Demo row="Agreement with the subject">

Only “he/she/it” in the present gets -s.

<Example><W role="subject">I</W> <W role="verb">eat</W> <W role="object">sushi</W>.</Example>
<Example><W role="subject">She</W> <W role="verb">eats</W> <W role="object">sushi</W>.</Example>

</Demo>

<Demo row="Past tense">

Usually -ed, with many irregulars.

<Example>
	<W role="subject">I</W> <W role="verb">watched</W> <W role="object">a movie</W>.
</Example>
<Example><W role="subject">I</W> <W role="verb">ate</W> <W role="object">sushi</W>.</Example>

</Demo>

<Demo row="Negation">

“do not” before the verb.

<Example>
	<W role="subject">I</W> <W role="verb">don't eat</W> <W role="object">sushi</W>.
</Example>

</Demo>
