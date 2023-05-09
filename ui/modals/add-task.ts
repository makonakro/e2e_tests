import Button from "../elements/button";
import InputField from "../elements/input-field";
import { Pages } from "../pages";
import BaseModal from "./base-modal";

const SELECTORS = {
  dialog: 'div[role="dialog"]',
  add_task_button: 'button:has-text("Add task")',
  task_name: '[aria-label="Task name"]'
}

export default class AddTask extends BaseModal {
  constructor(pages: Pages) {
    super(pages, SELECTORS.dialog)
}

get task_name() {
  return new InputField(this.page, this.modal.locator(SELECTORS.task_name));
}

get add_task() {
  return new Button(this.page, this.modal.locator(SELECTORS.add_task_button));
}

}