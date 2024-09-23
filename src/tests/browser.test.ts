import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
//   await page.goto('http://localhost:4321/')
    await page.goto('http://freddiesmith-portfolio.vercel.app')

  // keep browser open
  await page.pause()
})
