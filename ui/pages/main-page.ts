
import BasePage from "./base-page";
import TextBox from "../elements/text-box";
import Button from "../elements/button";

const SELECTORS = {
  title: 'h1',
  quick_add_button: '[id="quick_add_task_holder"]',
}

export default class MainPage extends BasePage {

  get title() {
    return new TextBox(this.page, SELECTORS.title);
  }

  get quick_add() {
    return new Button(this.page, SELECTORS.quick_add_button);
  }

}
