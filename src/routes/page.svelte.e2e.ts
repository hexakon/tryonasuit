import { expect, test } from '@playwright/test';

test('language picker chooses and swaps columns', async ({ page }) => {
	await page.goto('/');
	const left = page.getByLabel('left column language');
	const right = page.getByLabel('right column language');
	const visibleLangs = () =>
		page.locator('section').first().locator('div.grid > [lang]').evaluateAll((els) => els.map((e) => e.lang));

	await expect.poll(visibleLangs).toEqual(['en', 'ja']);

	await right.selectOption('sv');
	await expect.poll(visibleLangs).toEqual(['en', 'sv']);

	// Picking the other column's language swaps them.
	await left.selectOption('sv');
	await expect(right).toHaveValue('en');
});
