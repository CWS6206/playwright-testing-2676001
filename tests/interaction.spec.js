const { test, expect } = require('@playwright/test')

test('test js interaction', async ({ page }) => {
  await page.goto('contact.html')


  const person = page.locator('#person2')
  const details = person.locator('p')

  await person.click()
  await expect(details).toBeVisible()

})
