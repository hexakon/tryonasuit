<script>
	import { Demo, Example, W } from '$lib';
</script>

<!-- Word order -->

<Demo row="Basic order">

Subject–object–verb. Particles mark roles: は/が subject, を object.

<Example translation="I eat sushi.">
	<W role="subject">私</W>は<W role="object">寿司</W>を<W role="verb">食べる</W>。
</Example>
<Example translation="The dog bit the man.">
	<W role="subject">犬</W>が<W role="object">男</W>を<W role="verb">噛んだ</W>。
</Example>

</Demo>

<Demo row="Swapping subject and object">

Particles keep the roles; the fronted noun is emphasized.

<Example translation="The dog bit the man.">
	<W role="object">男</W>を<W role="subject">犬</W>が<W role="verb">噛んだ</W>。
</Example>

</Demo>

<Demo row="Verb-second (V2)" />

<Demo row="Time and place">

Before the verb: usually time, then place, then object.

<Example translation="I eat sushi in Tokyo today.">
	<W role="subject">私</W>は<W role="time">今日</W><W role="place">東京</W>で<W role="object">寿司</W>を<W role="verb">食べる</W>。
</Example>

</Demo>

<Demo row="Direction">

Postpositions go after the noun: から “from”, へ/に “to”.

<Example translation="I am going from Osaka to Tokyo.">
	<W role="subject">私</W>は<W role="place">大阪</W>から<W role="place">東京</W>へ<W role="verb">行く</W>。
</Example>

</Demo>

<Demo row="Questions">

Order doesn't change. か marks a question; question words stay in place.

<Example translation="Do (you) eat sushi?">
	<W role="object">寿司</W>を<W role="verb">食べます</W>か？
</Example>
<Example translation="What do (you) eat?">
	<W role="object">何</W>を<W role="verb">食べます</W>か？
</Example>

</Demo>

<Demo row="Subordinate clauses">

The clause comes before the main verb, closed by と; the main verb stays last.

<Example translation="He doesn't eat sushi.">
	<W role="subject">彼</W>は<W role="object">寿司</W>を<W role="verb">食べない</W>。
</Example>
<Example translation="I think that he doesn't eat sushi.">
	私は<W role="subject">彼</W>が<W role="object">寿司</W>を<W role="verb">食べない</W><W role="link">と</W>思う。
</Example>

</Demo>

<Demo row="Relative clauses">

The clause comes before the noun, with no relative pronoun.

<Example translation="the dog that bit the man">
	<W role="object">男</W>を<W role="verb">噛んだ</W><W role="subject">犬</W>
</Example>

</Demo>

<!-- Subject omission -->

<Demo row="Subject clear from context">

Left out when clear from context.

<Example translation="What did you do yesterday? — (I) watched a movie.">
	昨日何をした？ — <W role="object">映画</W>を<W role="verb">見た</W>。
</Example>

</Demo>

<Demo row="Dummy subjects">

No dummy subjects; the real subject fills the slot.

<Example translation="It is raining. (lit. “Rain is falling.”)">
	<W role="subject">雨</W>が<W role="verb">降っている</W>。
</Example>
<Example translation="There is a cat. (lit. “A cat exists.”)">
	<W role="subject">猫</W>が<W role="verb">いる</W>。
</Example>

</Demo>

<!-- Nouns -->

<Demo row="Definiteness">

No articles; context decides. その “that” can point back to something known.

<Example translation="A dog / The dog is barking.">
	<W role="subject">犬</W>が<W role="verb">吠えている</W>。
</Example>
<Example translation="That dog is barking.">
	<W role="subject">その犬</W>が<W role="verb">吠えている</W>。
</Example>

</Demo>

<Demo row="Plurals">

Nouns don't mark plural. Numbers take a counter word, here 匹 for small animals.

<Example translation="There is a dog. / There are dogs.">
	<W role="subject">犬</W>が<W role="verb">いる</W>。
</Example>
<Example translation="There are two dogs.">
	<W role="subject">犬</W>が二匹<W role="verb">いる</W>。
</Example>

</Demo>

<!-- Verbs -->

<Demo row="Agreement with the subject">

The verb never changes for the subject.

<Example translation="I eat sushi.">
	<W role="subject">私</W>は<W role="object">寿司</W>を<W role="verb">食べる</W>。
</Example>
<Example translation="She eats sushi.">
	<W role="subject">彼女</W>は<W role="object">寿司</W>を<W role="verb">食べる</W>。
</Example>

</Demo>

<Demo row="Past tense">

A regular -た ending; only a few irregulars.

<Example translation="I watched a movie.">
	<W role="subject">私</W>は<W role="object">映画</W>を<W role="verb">見た</W>。
</Example>
<Example translation="I ate sushi.">
	<W role="subject">私</W>は<W role="object">寿司</W>を<W role="verb">食べた</W>。
</Example>

</Demo>

<Demo row="Negation">

A negative ending on the verb: -ない, past -なかった.

<Example translation="I don't eat sushi.">
	<W role="subject">私</W>は<W role="object">寿司</W>を<W role="verb">食べない</W>。
</Example>
<Example translation="I didn't eat sushi.">
	<W role="subject">私</W>は<W role="object">寿司</W>を<W role="verb">食べなかった</W>。
</Example>

</Demo>
