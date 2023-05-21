import { Locator, Page } from "@playwright/test";
import BaseElement from "./base-element";

const SELECTORS = {
  dropdownItemPartialText: (dropdownItem, menuText) => `${dropdownItem}:has-text("${menuText}")`,
  dropdownItemExactText: (dropdownItem, menuText) => `${dropdownItem}:text-is("${menuText}")`

}

export default class Dropdown extends BaseElement {
  private readonly dropdown: Locator;
  private readonly dropdownItem: string;

  constructor (
    page: Page,
    anchor: string | Locator,
    dropdown: 'div[class$="-menu"]',
    dropdownItem: 'div[id*="option"]'
  ) {
    super(page, anchor);

    this.dropdown = this.page.locator(dropdown);
    this.dropdownItem = dropdownItem
  }

  private async getDropdownItemByText(index: string | Locator, exact: boolean) {
    let dropdownItem: Locator;
    await this.dropdown.waitFor();
      dropdownItem = this.dropdown.locator(
        exact 
        ? SELECTORS.dropdownItemExactText(this.dropdown, index)
        : SELECTORS.dropdownItemPartialText(this.dropdown, index)
      )
    await dropdownItem.waitFor()
    return dropdownItem
  }

  async open() {
    await this.element.waitFor()
    await this.element.click()
  }


}
