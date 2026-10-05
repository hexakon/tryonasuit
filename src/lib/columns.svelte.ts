import type { Component } from 'svelte';

/** One markdown file per language, keyed by language code. */
export const content = Object.fromEntries(
	Object.entries(import.meta.glob<Component>('./content/*.md', { eager: true, import: 'default' })).map(
		([path, c]) => [path.slice('./content/'.length, -'.md'.length), c]
	)
);

export const languages = Object.keys(content);

export const columns = $state({ left: 'en', right: 'ja' });

/** Show explanations and translations. */
export const show = $state({ explanations: true, translations: true });

/** Name of `lang`, in its own language unless `inLang` is given. */
export const languageName = (lang: string, inLang = lang) =>
	new Intl.DisplayNames([inLang], { type: 'language' }).of(lang);

/** Show `lang` on `side`, swapping columns if the other side already shows it. */
export function pick(side: 'left' | 'right', lang: string) {
	const other = side === 'left' ? 'right' : 'left';
	if (columns[other] === lang) columns[other] = columns[side];
	columns[side] = lang;
}
