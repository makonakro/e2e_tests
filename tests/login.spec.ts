import { addCookie } from 'helpers/add-cookie'
import { test } from 'test-config/test-base'
import { expect } from '@playwright/test'

test.describe('Login', () => {
  test.beforeEach(async ({ steps: { pages }, context }) => {
    await test.step('I open home page', async () => {
      await pages.home.open()
    })
    await addCookie('NEXT_LOCALE', 'en', context, process.env.BASE_URL!)
  })
  test('login with valid credentials', async ({ steps: { pages } }) => {
    await test.step('Go to login page', async () => {
      await pages.home.clickTab('Log in')
    })
    await test.step('Fill email', async () => {
      await pages.login.email_input.fill_input(process.env.USER_EMAIL)
    })
    await test.step('Fill password', async () => {
      await pages.login.password_input.fill_input(process.env.USER_PASSWORD)
    })
    await test.step('Click submit button', async () => {
      await pages.login.click_login_btn()
      expect(await pages.main.title.isVisible).toBeTruthy()
    })
  })
})
