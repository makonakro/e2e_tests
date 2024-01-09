import Button from '../elements/button'
import { Pages } from '../pages'
import BaseModal from './base-modal'

const SELECTORS = {
  dialog: 'div[role="menu"]',
  delete_task: 'button:has-text("Delete")',
}

export default class TaskMenu extends BaseModal {
  constructor(pages: Pages) {
    super(pages, SELECTORS.dialog)
  }

  get delete_task() {
    return new Button(this.page, this.modal.locator(SELECTORS.delete_task))
  }
}