import { Locator } from "@playwright/test";
import BasePage from "../pages/base-page";
import { Pages } from "../pages";


export default class BaseModal extends BasePage {
  protected readonly modal: Locator;
  constructor(pages: Pages, modalSelector: string) {
    super(pages);

    this.modal = this.page.locator(`${modalSelector}`)
  }

async isOpened() {
  try {
    await this.modal.waitFor({timeout: 12000});
    return true
  }
  catch {
    return false
  }
}

}