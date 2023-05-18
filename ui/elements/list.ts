import { Locator, Page } from '@playwright/test'
import BaseElement from './base-element'

const SELECTORS = {
  listItemByExactMatch: (listItemMatch, identifier) =>
    `${listItemMatch}:text-is("${identifier}")`,
  listItemByPartialMatch: (listItemMatch, identifier) =>
    `${listItemMatch}:has-text("${identifier}")`,
}

export default class List extends BaseElement {
  constructor(
    page: Page,
    rootElement: string | Locator,
    private readonly listItem: string | Locator
  ) {
    super(page, rootElement)
  }

  get listItems() {
    return this.element.locator(this.listItems)
  }

  async getListElement(identifier: string | number, exact = false) {
    if (typeof identifier === 'number') {
      return this.element.locator(this.listItem).nth(identifier)
    }
    return this.element.locator(
      exact
        ? SELECTORS.listItemByExactMatch(this.listItem, identifier)
        : SELECTORS.listItemByPartialMatch(this.listItem, identifier)
    )
  }

  private async getListItem(
    identifier: string | number,
    exact?: boolean
  ): Promise<Locator> {
    await this.element.waitFor({ state: 'attached' })
    const listItem: Locator = await this.getListElement(identifier, exact)
    await listItem.waitFor()
    return listItem
  }

  async isListItemVisible(identifier: string | number) {
    const listItem = await this.getListItem(identifier)
    return listItem.isVisible()
  }

  async getListItemText(identifier: string | number) {
    return (await this.getListItem(identifier)).innerText()
  }
}
