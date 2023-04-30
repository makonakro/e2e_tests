import {Locator, Page} from '@playwright/test'

export default class BaseElement {

  constructor (protected readonly page: Page, element: string) {
    this.elementLocator = this.getLocator(element)
  }

  private elementLocator: Locator;

  protected get baseElement() {
    return this.baseElement;
  }

    protected getLocator(element: string): Locator {
      return this.page.locator(element);
    }

    async waitForElementToBeVisible(timeout = 5000) {
      await this.elementLocator.waitFor({timeout});
    }


}


        