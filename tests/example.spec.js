// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST = 'http://127.0.0.1:5173/'
const API_URL = 'https://cataas.com/cat/says/'

test('Mostrar la frase y la imagen', async ({ page }) => {
  await page.goto(LOCALHOST)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  // console.log(textContent,imageSrc)

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(API_URL)).toBeTruthy()
})

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
