import BasePage from './base-page'
import Select from '../elements/select'

type Tab =
  | 'Features'
  | 'Templates'
  | 'For Teams'
  | 'Resources'
  | 'Pricing'
  | 'Log in'
  | 'Start for free'

const SELECTORS = {
  sharedNavigation: (name) => `a:has-text("${name}")`,
  enLanguage: 'en',
}

export default class HomePage extends BasePage {
  get chooseEnLanguage() {
    return new Select(this.page, SELECTORS.enLanguage)
  }

  async clickTab(tab: Tab) {
    await this.page.click(SELECTORS.sharedNavigation(tab))
  }

  async open() {
    return super.open('/')
  }
}
