import Button from '../elements/button'
import { Pages } from '../pages'
import BaseModal from './base-modal'

const SELECTORS = {
  dialog: 'div[role="dialog"]',
  delete_task: 'button:has-text("Delete")',
}

export default class DeleteTask extends BaseModal {
  constructor(pages: Pages) {
    super(pages, SELECTORS.dialog)
  }

  get delete_task_button() {
    return new Button(this.page, this.modal.locator(SELECTORS.delete_task))
  }

  async delete_task() {
    this.delete_task_button.click()
    const [response] = await Promise.all([
      this.page.waitForResponse(
        (response) =>
          response.url().includes('/sync') &&
          response.request().method() === 'POST'
      ),
    ])
  }
}