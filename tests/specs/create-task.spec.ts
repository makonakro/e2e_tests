import { test } from '../../test-config/test-base'
import { expect } from '@playwright/test'

test.describe('Add task', () => {
  test.beforeEach(async ({ steps: { pages }, page }) => {
    await test.step('I open home page', async () => {
      await page.goto('')
    })
    await test.step('I select En language', async () => {
      await pages.home.chooseEnLanguage
    })
    await test.step('Go to login page', async () => {
      await pages.home.clickTab('Log in')
    })
    await test.step('Log in', async () => {
      await pages.login.log_in(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
      )
    })
  })
  test.afterEach(async ({ steps: { pages }, page }) => {
    await test.step('I do clean up', async () => {
      await pages.main.open_task.click()
      await pages.task.task_menu.click()
      await pages.modals.task_menu.delete_task.click()
      await pages.modals.delete_task.delete_task()
    })
  })

  test('Add task without description', async ({ steps: { pages }, name }) => {
    await test.step('Click add task', async () => {
      await pages.main.quick_add.click()
    })
    await test.step('Add task name', async () => {
      await pages.modals.add_task.task_name.fill_input(name)
    })
    await test.step('Click "Add task" button', async () => {
      await pages.modals.add_task.add_task.click()
      expect(await pages.main.task_list.isListItemVisible(name)).toBeTruthy()
    })
  })
  test('Add task with description', async ({ steps: { pages }, name }) => {
    await test.step('Click add task', async () => {
      await pages.main.quick_add.click()
    })
    await test.step('Add task name', async () => {
      await pages.modals.add_task.task_name.fill_input(name)
    })
    await test.step('Add task description', async () => {
      await pages.modals.add_task.task_description.fill_input(
        'new task with description'
      )
    })
    await test.step('Click "Add task" button', async () => {
      await pages.modals.add_task.add_task.click()
      expect(await pages.main.task_list.isListItemVisible(name)).toBeTruthy()
      expect(await pages.main.task_list.getListItemText(name)).toContain(
        'new task with description'
      )
    })
  })
})
