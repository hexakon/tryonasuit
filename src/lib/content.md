<script>
	// ## sections, ### rows and #### language columns become Section, Row and Demo (see vite.config.ts).
	import { Section, Row, Demo, Example, S, V, O, T, P, C } from '$lib';
</script>

## Word order

### Basic order

#### en

<Example explanation="Subject–verb–object.">
	<S>I</S> <V>eat</V> <O>sushi</O>.
</Example>
<Example>
	<S>The dog</S> <V>bit</V> <O>the man</O>.
</Example>

#### ja

<Example explanation="Subject–object–verb. Particles mark roles: は/が subject, を object." translation="I eat sushi.">
	<S>私</S>は<O>寿司</O>を<V>食べる</V>。
</Example>
<Example translation="The dog bit the man.">
	<S>犬</S>が<O>男</O>を<V>噛んだ</V>。
</Example>

#### sv

<Example explanation="Subject–verb–object." translation="I eat sushi.">
	<S>Jag</S> <V>äter</V> <O>sushi</O>.
</Example>
<Example translation="The dog bit the man.">
	<S>Hunden</S> <V>bet</V> <O>mannen</O>.
</Example>

### Swapping subject and object

#### en

<Example explanation="Meaning flips.">
	<S>The man</S> <V>bit</V> <O>the dog</O>.
</Example>

#### ja

<Example explanation="Particles keep the roles; the fronted noun is emphasized." translation="The dog bit the man.">
	<O>男</O>を<S>犬</S>が<V>噛んだ</V>。
</Example>

#### sv

<Example explanation="Meaning flips." translation="The man bit the dog.">
	<S>Mannen</S> <V>bet</V> <O>hunden</O>.
</Example>

### Verb-second (V2)

#### en

#### ja

#### sv

<Example explanation="The verb is always second; fronting something else puts the subject after it." translation="Today I eat sushi. (lit. “Today eat I sushi.”)">
	<T>Idag</T> <V>äter</V> <S>jag</S> <O>sushi</O>.
</Example>
<Example translation="I like eating sushi. (lit. “Sushi eat I gladly.”)">
	<O>Sushi</O> <V>äter</V> <S>jag</S> gärna.
</Example>

### Time and place

#### en

<Example explanation="After the object: place, then time.">
	<S>I</S> <V>eat</V> <O>sushi</O> in <P>Tokyo</P>
	<T>today</T>.
</Example>

#### ja

<Example explanation="Before the verb: usually time, then place, then object." translation="I eat sushi in Tokyo today.">
	<S>私</S>は<T>今日</T><P>東京</P>で<O>寿司</O>を<V>食べる</V>。
</Example>

#### sv

<Example explanation="After the object: place, then time." translation="I eat sushi in Tokyo today.">
	<S>Jag</S> <V>äter</V> <O>sushi</O> i <P>Tokyo</P>
	<T>idag</T>.
</Example>

### Direction

#### en

<Example explanation="Prepositions go before the noun.">
	<S>I</S> <V>am going</V> from <P>Osaka</P> to
	<P>Tokyo</P>.
</Example>

#### ja

<Example explanation="Postpositions go after the noun: から “from”, へ/に “to”." translation="I am going from Osaka to Tokyo.">
	<S>私</S>は<P>大阪</P>から<P>東京</P>へ<V>行く</V>。
</Example>

#### sv

<Example explanation="Prepositions go before the noun." translation="I am going from Osaka to Tokyo.">
	<S>Jag</S> <V>åker</V> från <P>Osaka</P> till
	<P>Tokyo</P>.
</Example>

### Questions

#### en

<Example explanation="Yes/no questions add “do” before the subject; question words go first.">
	<V>Do</V> <S>you</S> <V>eat</V> <O>sushi</O>?
</Example>
<Example>
	<O>What</O> <V>do</V> <S>you</S> <V>eat</V>?
</Example>

#### ja

<Example explanation="Order doesn't change. か marks a question; question words stay in place." translation="Do (you) eat sushi?">
	<O>寿司</O>を<V>食べます</V>か？
</Example>
<Example translation="What do (you) eat?">
	<O>何</O>を<V>食べます</V>か？
</Example>

#### sv

<Example explanation="Yes/no questions start with the verb; question words go first, then V2." translation="Do you eat sushi? (lit. “Eat you sushi?”)">
	<V>Äter</V> <S>du</S> <O>sushi</O>?
</Example>
<Example translation="What do you eat? (lit. “What eat you?”)">
	<O>Vad</O> <V>äter</V> <S>du</S>?
</Example>

### Subordinate clauses

#### en

<Example explanation="Same order as a main clause.">
	<S>He</S> <V>doesn't eat</V> <O>sushi</O>.
</Example>
<Example>
	I think <C>that</C> <S>he</S> <V>doesn't eat</V>
	<O>sushi</O>.
</Example>

#### ja

<Example explanation="The clause comes before the main verb, closed by と; the main verb stays last." translation="He doesn't eat sushi.">
	<S>彼</S>は<O>寿司</O>を<V>食べない</V>。
</Example>
<Example translation="I think that he doesn't eat sushi.">
	私は<S>彼</S>が<O>寿司</O>を<V>食べない</V><C>と</C>思う。
</Example>

#### sv

<Example explanation="No V2 in subclauses, and “inte” (not) moves before the verb." translation="He doesn't eat sushi. (lit. “He eats not sushi.”)">
	<S>Han</S> <V>äter</V> inte <O>sushi</O>.
</Example>
<Example translation="I think that he doesn't eat sushi. (lit. “…that he not eats sushi.”)">
	Jag tror <C>att</C> <S>han</S> inte <V>äter</V>
	<O>sushi</O>.
</Example>

### Relative clauses

#### en

<Example explanation="The clause follows the noun, introduced by “that”/“who”.">
	<S>the dog</S> <C>that</C> <V>bit</V> <O>the man</O>
</Example>

#### ja

<Example explanation="The clause comes before the noun, with no relative pronoun." translation="the dog that bit the man">
	<O>男</O>を<V>噛んだ</V><S>犬</S>
</Example>

#### sv

<Example explanation="The clause follows the noun, introduced by “som”." translation="the dog that bit the man">
	<S>hunden</S> <C>som</C> <V>bet</V> <O>mannen</O>
</Example>

## Subject omission

### Subject clear from context

#### en

<Example>
	What did you do yesterday? — <S>I</S>
	<V>watched</V> <O>a movie</O>.
</Example>

<Example explanation="Dropping it is casual or diary style only:">
	<V>Watched</V> <O>a movie</O>.
</Example>

#### ja

<Example explanation="Left out when clear from context." translation="What did you do yesterday? — (I) watched a movie.">
	昨日何をした？ — <O>映画</O>を<V>見た</V>。
</Example>

#### sv

<Example translation="What did you do yesterday? — I watched a movie.">
	Vad gjorde du igår? — <S>Jag</S>
	<V>såg</V> <O>en film</O>.
</Example>

<Example explanation="Dropping it is casual or diary style only:" translation="Watched a movie.">
	<V>Såg</V> <O>en film</O>.
</Example>

### Dummy subjects

#### en

<Example><S>It</S> <V>is raining</V>.</Example>
<Example><S>There</S> <V>is</V> a cat.</Example>

#### ja

<Example explanation="No dummy subjects; the real subject fills the slot." translation="It is raining. (lit. “Rain is falling.”)">
	<S>雨</S>が<V>降っている</V>。
</Example>
<Example translation="There is a cat. (lit. “A cat exists.”)">
	<S>猫</S>が<V>いる</V>。
</Example>

#### sv

<Example translation="It is raining.">
	<S>Det</S> <V>regnar</V>.
</Example>
<Example translation="There is a cat.">
	<S>Det</S> <V>finns</V> en katt.
</Example>

## Nouns

### Definiteness

#### en

<Example explanation="Articles go before the noun: “a” new, “the” known."><S>A dog</S> <V>is barking</V>.</Example>
<Example><S>The dog</S> <V>is barking</V>.</Example>

#### ja

<Example explanation="No articles; context decides. その “that” can point back to something known." translation="A dog / The dog is barking.">
	<S>犬</S>が<V>吠えている</V>。
</Example>
<Example translation="That dog is barking.">
	<S>その犬</S>が<V>吠えている</V>。
</Example>

#### sv

<Example explanation="“en” or “ett” (by gender) before the noun for new; a suffix for known." translation="A dog is barking.">
	<S>En hund</S> <V>skäller</V>.
</Example>
<Example translation="The dog is barking.">
	<S>Hunden</S> <V>skäller</V>.
</Example>

### Plurals

#### en

<Example explanation="Usually -s, with some irregulars (man → men)."><S>There</S> <V>is</V> a dog.</Example>
<Example><S>There</S> <V>are</V> two dogs.</Example>

#### ja

<Example explanation="Nouns don't mark plural. Numbers take a counter word, here 匹 for small animals." translation="There is a dog. / There are dogs.">
	<S>犬</S>が<V>いる</V>。
</Example>
<Example translation="There are two dogs.">
	<S>犬</S>が二匹<V>いる</V>。
</Example>

#### sv

<Example explanation="The ending depends on the noun (hundar, katter, hus); some don't change." translation="There is a dog.">
	<S>Det</S> <V>finns</V> en hund.
</Example>
<Example translation="There are two dogs.">
	<S>Det</S> <V>finns</V> två hundar.
</Example>

## Verbs

### Agreement with the subject

#### en

<Example explanation="Only “he/she/it” in the present gets -s."><S>I</S> <V>eat</V> <O>sushi</O>.</Example>
<Example><S>She</S> <V>eats</V> <O>sushi</O>.</Example>

#### ja

<Example explanation="The verb never changes for the subject." translation="I eat sushi.">
	<S>私</S>は<O>寿司</O>を<V>食べる</V>。
</Example>
<Example translation="She eats sushi.">
	<S>彼女</S>は<O>寿司</O>を<V>食べる</V>。
</Example>

#### sv

<Example explanation="The verb never changes for the subject." translation="I eat sushi.">
	<S>Jag</S> <V>äter</V> <O>sushi</O>.
</Example>
<Example translation="She eats sushi.">
	<S>Hon</S> <V>äter</V> <O>sushi</O>.
</Example>

### Past tense

#### en

<Example explanation="Usually -ed, with many irregulars.">
	<S>I</S> <V>watched</V> <O>a movie</O>.
</Example>
<Example><S>I</S> <V>ate</V> <O>sushi</O>.</Example>

#### ja

<Example explanation="A regular -た ending; only a few irregulars." translation="I watched a movie.">
	<S>私</S>は<O>映画</O>を<V>見た</V>。
</Example>
<Example translation="I ate sushi.">
	<S>私</S>は<O>寿司</O>を<V>食べた</V>。
</Example>

#### sv

<Example explanation="Usually -de or -te, with many irregulars." translation="I watched a movie.">
	<S>Jag</S> <V>tittade</V> på <O>en film</O>.
</Example>
<Example translation="I ate sushi.">
	<S>Jag</S> <V>åt</V> <O>sushi</O>.
</Example>

### Negation

#### en

<Example explanation="“do not” before the verb.">
	<S>I</S> <V>don't eat</V> <O>sushi</O>.
</Example>

#### ja

<Example explanation="A negative ending on the verb: -ない, past -なかった." translation="I don't eat sushi.">
	<S>私</S>は<O>寿司</O>を<V>食べない</V>。
</Example>
<Example translation="I didn't eat sushi.">
	<S>私</S>は<O>寿司</O>を<V>食べなかった</V>。
</Example>

#### sv

<Example explanation="“inte” after the verb (before it in subclauses)." translation="I don't eat sushi. (lit. “I eat not sushi.”)">
	<S>Jag</S> <V>äter</V> inte <O>sushi</O>.
</Example>
