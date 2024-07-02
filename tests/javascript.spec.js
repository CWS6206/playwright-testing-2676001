const { test, expect } = require('@playwright/test')

test('is javascript okay', async ({ page }) => {
  let jsError = null
  page.on('pageerror', error => {
    jsError = error
  })
  await page.goto('index.html')

  expect(jsError).toBeNull()
})
