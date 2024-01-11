import BasePage from './base-page'
import Button from '../elements/button'

const SELECTORS = {
  task_menu: '[aria-label="More actions"]',
}

export default class Task extends BasePage {
  get task_menu() {
    return new Button(this.page, SELECTORS.task_menu)
  }
}
