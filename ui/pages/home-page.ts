import { Pages } from "./index";
import Button from "../elements/button";
import InputField from "../elements/input-field";
import BasePage from "./base-page";

type Tab = 'Features' | 'Templates' | 'For Teams' | 'Resources' | 'Pricing' | 'Log in'| 'Start for free';

const SELECTORS = {
  sharedNavigation: name =>`.K9o8dlbROHYPd6t_tjkq:text-is("${name}")`
}

export default class HomePage extends BasePage {

  async clickTab(tab: Tab) {
    await this.page.click(SELECTORS.sharedNavigation(tab));
  }
}