import { createContext } from 'svelte';

type Entry = { id: string; title: string; rows: Entry[] };

// Sections and rows add themselves while rendering, so the TOC must render after them.
export const [getToc, setToc] = createContext<Entry[]>();

export const slug = (s: string) =>
	s
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
