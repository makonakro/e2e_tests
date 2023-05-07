import { Locator } from "@playwright/test";
import BaseElement from "./base-element";



export default class Select extends BaseElement {
  private readonly select: Locator;

  async setValue(value: string) {
    this.select.selectOption(value);
  }
}