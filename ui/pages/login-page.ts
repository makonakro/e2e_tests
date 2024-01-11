import { Pages } from './index'
import Button from '../elements/button'
import InputField from '../elements/input-field'
import BasePage from './base-page'
import TextBox from '../elements/text-box'

const SELECTORS = {
  email_input: '[type="email"]',
  password_input: '[type="password"]',
  submit_btn: 'button:has-text("Log in")',
  title: 'h1',
}

export default class LoginPage extends BasePage {
  get email_input() {
    return new InputField(this.page, SELECTORS.email_input)
  }

  get password_input() {
    return new InputField(this.page, SELECTORS.password_input)
  }

  get submit_btn() {
    return new Button(this.page, SELECTORS.submit_btn)
  }

  get title() {
    return new TextBox(this.page, SELECTORS.title)
  }

  async click_login_btn() {
    this.submit_btn.click()
    const [response] = await Promise.all([
      this.page.waitForResponse(
        (response) =>
          response.url().includes('/login') &&
          response.request().method() === 'POST'
      ),
    ])
  }

  async log_in(email, password) {
    await this.email_input.fill_input(email)
    await this.password_input.fill_input(password)
    await this.click_login_btn()
  }

  async open() {
    return super.open('/auth/login')
  }
}
