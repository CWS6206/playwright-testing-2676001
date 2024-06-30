const { test, expect } = require('@playwright/test')

test('is javascript okay', async ({ page }) => {
  await page.goto('index.html')

  let jsError = null
  page.on('pageerror', error => {
    jsError = error
  })

  await page.goto('index.html')

  expect(jsError).toBeNull()
})
