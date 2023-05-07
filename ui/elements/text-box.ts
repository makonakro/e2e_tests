import BaseElement from "./base-element";


export default class TextBox extends BaseElement {
  
  async innerText(): Promise<string> {
    await this.waitForElementToBeVisible();
    return this.element.innerText();
  }

  async isVisible(): Promise<boolean> {
    await this.element.waitFor({state: 'visible'});
    return this.element.isVisible()
  }
}