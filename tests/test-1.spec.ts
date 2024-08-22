import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.getByPlaceholder('Search Amazon.in').fill('apple iphone15');
  await page.getByRole('button', { name: 'Go' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Apple iPhone 15 (128 GB) - Black' }).nth(1).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Add to Cart' }).click();
  /*comment*/
});
