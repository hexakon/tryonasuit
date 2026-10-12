import { expect, test } from '@playwright/test';

test('language picker chooses and swaps columns', async ({ page }) => {
	await page.goto('/');
	const left = page.getByLabel('left column language');
	const right = page.getByLabel('right column language');
	const visibleLangs = () =>
		page.locator('div.grid').first().locator(':scope > [lang]').evaluateAll((els) => els.map((e) => e.getAttribute('lang')));

	await expect.poll(visibleLangs).toEqual(['en', 'ja']);

	await right.selectOption('sv');
	await expect.poll(visibleLangs).toEqual(['en', 'sv']);

	// Picking the other column's language swaps them.
	await left.selectOption('sv');
	await expect(right).toHaveValue('en');
});

test('missing feature is stated plainly', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText("Japanese doesn't have this.").first()).toBeVisible();
});

test('toc highlights the section scrolled to', async ({ page }) => {
	await page.goto('/');
	const toc = page.getByRole('navigation', { name: 'Table of contents' });
	await toc.getByRole('link', { name: 'Questions' }).click();
	await expect(toc.getByRole('link', { name: 'Questions' })).toHaveAttribute('aria-current', 'location');
	await expect(toc.locator('[aria-current]')).toHaveCount(1);
});

test('every row has content in every language', async ({ page }) => {
	await page.goto('/');
	// A row grid without two columns means content.md is missing a #### heading for a language.
	const emptyColumns = () =>
		page.locator('h3 + div').evaluateAll((els) => els.filter((e) => e.children.length !== 2).length);
	for (const lang of ['ja', 'sv']) {
		await page.getByLabel('right column language').selectOption(lang);
		await expect.poll(emptyColumns).toBe(0);
	}
});

test('explanations toggle per example and all at once', async ({ page }) => {
	await page.goto('/');
	const explanation = page.getByText('Subject–verb–object.').first();
	await expect(explanation).toBeHidden();

	await page.getByRole('group').filter({ has: explanation }).getByLabel('Explanation').click();
	await expect(explanation).toBeVisible();

	// The sidebar checkbox expands every explanation.
	await page.getByLabel('Explanations').check();
	await expect(page.getByText('Subject–object–verb.', { exact: false }).first()).toBeVisible();
});
