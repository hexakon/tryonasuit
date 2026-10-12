export const languages = ['en', 'ja', 'sv'];

export const columns = $state({ left: 'en', right: 'ja' });

/** Show translations; expand all explanations. */
export const show = $state({ explanations: false, translations: true });

/** Name of `lang`, in its own language unless `inLang` is given. */
export const languageName = (lang: string, inLang = lang) =>
	new Intl.DisplayNames([inLang], { type: 'language' }).of(lang);

/** Show `lang` on `side`, swapping columns if the other side already shows it. */
export function pick(side: 'left' | 'right', lang: string) {
	const other = side === 'left' ? 'right' : 'left';
	if (columns[other] === lang) columns[other] = columns[side];
	columns[side] = lang;
}
