import BasePage from './base-page'
import TextBox from '../elements/text-box'
import Button from '../elements/button'
import List from '../elements/list'

const SELECTORS = {
  title: 'h1',
  quick_add_button: `[data-testid="app-sidebar-container"] button:has-text('Add task')`,
  task_list: '.items',
  task: '.task_list_item__content__wrapper',
  task_menu: '[data-testid="more_menu"]',
}

export default class MainPage extends BasePage {
  get title() {
    return new TextBox(this.page, SELECTORS.title)
  }

  get quick_add() {
    return new Button(this.page, SELECTORS.quick_add_button)
  }

  get task_list() {
    return new List(this.page, SELECTORS.task_list, SELECTORS.task)
  }

  get open_menu() {
    return new Button(this.page, SELECTORS.task_menu)
  }

  get open_task() {
    return new Button(this.page, SELECTORS.task)
  }
}
