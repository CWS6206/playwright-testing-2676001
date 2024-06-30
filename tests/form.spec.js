const { test, expect } = require('@playwright/test')

test('fill in form', async ({ page }) => {
  await page.goto('index.html')

  let requestSent = false
  await page.route('**/*', (route, request) => {
    if (route.request().method() === 'POST') {
      requestSent = true
    }
    route.continue()
  })

  await page.fill('input[name="name"]', 'Tom Rose')
  await page.getByLabel('Ich akzeptiere die AGB').check()
  await page.click('button[type="submit"]')

  await page.waitForLoadState('networkidle')
  expect(requestSent).toBeTruthy()
})
