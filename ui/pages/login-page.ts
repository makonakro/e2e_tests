import { Pages } from "./index";
import Button from "../elements/button";
import InputField from "../elements/input-field";
import BasePage from "./base-page";

const SELECTORS = {
  email_input: '[placeholder="Enter your email..."]',
  password_input: '[placeholder="Enter your password..."]',
  submit_btn: '[type="submit"]'
}

export default class LoginPage extends BasePage {

  get email_input() {
    return new InputField(this.page, SELECTORS.email_input);
  }

  get password_input() {
    return new InputField(this.page, SELECTORS.password_input);
  }

  get submit_btn() {
    return new Button(this.page, SELECTORS.submit_btn);
  }
}
