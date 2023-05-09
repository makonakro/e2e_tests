
import BasePage from "./base-page";
import TextBox from "../elements/text-box";

const SELECTORS = {
  title: 'h1'
}

export default class MainPage extends BasePage {

  get title() {
    return new TextBox(this.page, SELECTORS.title);
  }
}
