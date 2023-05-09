import BaseElement from "./base-element";


export default class InputField extends BaseElement {

  async fill_input(value) {
    await this.element.fill(value);
  }
  
}