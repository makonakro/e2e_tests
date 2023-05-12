import { Locator, Page } from "@playwright/test";
import BaseElement from "./base-element";


const SELECTORS = {

}

export default class List extends BaseElement {
  constructor(page: Page, rootElement: string | Locator, private readonly listItem: string | Locator) {
    super(page, rootElement)
  }

  get listItems() {
    return this.element.locator(this.listItems);
  }

  
}