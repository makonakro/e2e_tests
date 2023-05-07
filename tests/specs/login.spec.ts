import {test} from "../../test-config/test-base"
import { expect } from "@playwright/test"



test.describe('Login', () => {
  test.beforeEach(async ({steps: { pages }, page}) => {
    await test.step('I open home page', async () => {
      await page.goto('');
    })
    await test.step('I select En language', async () => {
      await pages.home.chooseEnLanguage;
    })
  })
  test('login with valid credentials', async ({ steps: { pages }, page }) => {
    await test.step('Go to login page', async () => {
      await pages.home.clickTab('Log in');
      expect (await pages.login.title.isVisible).toBeTruthy();
    
    })
    await test.step('Fill email', async () => {
      await pages.login.email_input.fill_input(process.env.USER_EMAIL);
    })
    await test.step('Fill password', async () => {
      await pages.login.password_input.fill_input(process.env.USER_PASSWORD);
    })
    await test.step('Click submit button', async () => {
      await pages.login.submit_btn.click();
    })
  })
})    
