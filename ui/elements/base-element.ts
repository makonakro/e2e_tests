import {Locator, Page} from '@playwright/test'

export default class BaseElement {

  constructor (protected readonly page: Page, element: string | Locator) {
    this.elementLocator = this.getLocator(element)
  }

  get locator() : Locator{
    return this.elementLocator
  }

  private elementLocator: Locator;

    protected getLocator(element: string | Locator): Locator {
      return typeof element === 'string' ? this.page.locator(element) : element;
    }

    protected get element() {
      return this.elementLocator;
    }

    protected set element(element: Locator) {
      this.elementLocator = element
    }

    async waitForElementToBeVisible(timeout = 5000) {
      await this.elementLocator.waitFor({timeout});
    }


}


        