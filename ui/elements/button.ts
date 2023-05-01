import BaseElement from "./base-element";

export default class Button extends BaseElement {

  async click() {
    await this.waitForElementToBeVisible();
    await this.baseElement.click();
  }

}