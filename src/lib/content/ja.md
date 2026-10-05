<script>
	import { Demo, Example, S, V, O, T, P, C } from '$lib';
</script>

<!-- Word order -->

<Demo row="Basic order">

Subject–object–verb. Particles mark roles: は/が subject, を object.

<Example translation="I eat sushi.">
	<S>私</S>は<O>寿司</O>を<V>食べる</V>。
</Example>
<Example translation="The dog bit the man.">
	<S>犬</S>が<O>男</O>を<V>噛んだ</V>。
</Example>

</Demo>

<Demo row="Swapping subject and object">

Particles keep the roles; the fronted noun is emphasized.

<Example translation="The dog bit the man.">
	<O>男</O>を<S>犬</S>が<V>噛んだ</V>。
</Example>

</Demo>

<Demo row="Verb-second (V2)" />

<Demo row="Time and place">

Before the verb: usually time, then place, then object.

<Example translation="I eat sushi in Tokyo today.">
	<S>私</S>は<T>今日</T><P>東京</P>で<O>寿司</O>を<V>食べる</V>。
</Example>

</Demo>

<Demo row="Direction">

Postpositions go after the noun: から “from”, へ/に “to”.

<Example translation="I am going from Osaka to Tokyo.">
	<S>私</S>は<P>大阪</P>から<P>東京</P>へ<V>行く</V>。
</Example>

</Demo>

<Demo row="Questions">

Order doesn't change. か marks a question; question words stay in place.

<Example translation="Do (you) eat sushi?">
	<O>寿司</O>を<V>食べます</V>か？
</Example>
<Example translation="What do (you) eat?">
	<O>何</O>を<V>食べます</V>か？
</Example>

</Demo>

<Demo row="Subordinate clauses">

The clause comes before the main verb, closed by と; the main verb stays last.

<Example translation="He doesn't eat sushi.">
	<S>彼</S>は<O>寿司</O>を<V>食べない</V>。
</Example>
<Example translation="I think that he doesn't eat sushi.">
	私は<S>彼</S>が<O>寿司</O>を<V>食べない</V><C>と</C>思う。
</Example>

</Demo>

<Demo row="Relative clauses">

The clause comes before the noun, with no relative pronoun.

<Example translation="the dog that bit the man">
	<O>男</O>を<V>噛んだ</V><S>犬</S>
</Example>

</Demo>

<!-- Subject omission -->

<Demo row="Subject clear from context">

Left out when clear from context.

<Example translation="What did you do yesterday? — (I) watched a movie.">
	昨日何をした？ — <O>映画</O>を<V>見た</V>。
</Example>

</Demo>

<Demo row="Dummy subjects">

No dummy subjects; the real subject fills the slot.

<Example translation="It is raining. (lit. “Rain is falling.”)">
	<S>雨</S>が<V>降っている</V>。
</Example>
<Example translation="There is a cat. (lit. “A cat exists.”)">
	<S>猫</S>が<V>いる</V>。
</Example>

</Demo>

<!-- Nouns -->

<Demo row="Definiteness">

No articles; context decides. その “that” can point back to something known.

<Example translation="A dog / The dog is barking.">
	<S>犬</S>が<V>吠えている</V>。
</Example>
<Example translation="That dog is barking.">
	<S>その犬</S>が<V>吠えている</V>。
</Example>

</Demo>

<Demo row="Plurals">

Nouns don't mark plural. Numbers take a counter word, here 匹 for small animals.

<Example translation="There is a dog. / There are dogs.">
	<S>犬</S>が<V>いる</V>。
</Example>
<Example translation="There are two dogs.">
	<S>犬</S>が二匹<V>いる</V>。
</Example>

</Demo>

<!-- Verbs -->

<Demo row="Agreement with the subject">

The verb never changes for the subject.

<Example translation="I eat sushi.">
	<S>私</S>は<O>寿司</O>を<V>食べる</V>。
</Example>
<Example translation="She eats sushi.">
	<S>彼女</S>は<O>寿司</O>を<V>食べる</V>。
</Example>

</Demo>

<Demo row="Past tense">

A regular -た ending; only a few irregulars.

<Example translation="I watched a movie.">
	<S>私</S>は<O>映画</O>を<V>見た</V>。
</Example>
<Example translation="I ate sushi.">
	<S>私</S>は<O>寿司</O>を<V>食べた</V>。
</Example>

</Demo>

<Demo row="Negation">

A negative ending on the verb: -ない, past -なかった.

<Example translation="I don't eat sushi.">
	<S>私</S>は<O>寿司</O>を<V>食べない</V>。
</Example>
<Example translation="I didn't eat sushi.">
	<S>私</S>は<O>寿司</O>を<V>食べなかった</V>。
</Example>

</Demo>
