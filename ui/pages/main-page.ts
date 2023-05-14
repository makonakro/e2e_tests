
import BasePage from "./base-page";
import TextBox from "../elements/text-box";
import Button from "../elements/button";
import List from "../elements/list";

const SELECTORS = {
  title: 'h1',
  quick_add_button: '[id="quick_add_task_holder"]',
  taskList: '.items',
  task: '.task_list_item'
}

export default class MainPage extends BasePage {

  get title() {
    return new TextBox(this.page, SELECTORS.title);
  }

  get quick_add() {
    return new Button(this.page, SELECTORS.quick_add_button);
  }

  get taskList() {
    return new List(this.page, SELECTORS.taskList, SELECTORS.task)
  }
}
