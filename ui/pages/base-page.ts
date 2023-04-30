import { Pages } from "./index";

const SELECTORS = {

}

export default class BasePage {
  constructor(protected readonly pages: Pages, protected readonly page = pages.page) {}

  protected locator(el: string) {
    return this.page.locator(el);
  }
}