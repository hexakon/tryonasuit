export const languages = ['en', 'ja', 'sv'];

export const columns = $state({ left: 'en', right: 'ja' });

export const languageName = (lang: string) =>
	new Intl.DisplayNames([lang], { type: 'language' }).of(lang);

/** Show `lang` on `side`, swapping columns if the other side already shows it. */
export function pick(side: 'left' | 'right', lang: string) {
	const other = side === 'left' ? 'right' : 'left';
	if (columns[other] === lang) columns[other] = columns[side];
	columns[side] = lang;
}
