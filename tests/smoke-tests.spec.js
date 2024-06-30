const { test, expect } = require('@playwright/test')

test('name field is required', async ({ page }) => {
  await page.goto('index.html')

  await page.click('button[type="submit"]')

  const isRequired = await page.getAttribute('#name', 'required')
  expect(isRequired).not.toBeNull()
})

test('link named "kontakt" leads to contact.html', async ({ page }) => {
  await page.goto('index.html')

  await page.click('text=Kontakt')

  expect(page.url()).toContain('contact.html')
})

test('footer contains "Beispielunternehmen"', async ({ page }) => {
  await page.goto('index.html')

  const footer = await page.$('footer')
  const footerText = await footer.textContent()

  expect(footerText).toContain('Beispielunternehmen')
})
