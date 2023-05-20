import Button from '../elements/button'
import InputField from '../elements/input-field'
import { Pages } from '../pages'
import BaseModal from './base-modal'

const SELECTORS = {
  dialog: '.scheduler',
  tomorrow: 'button:has-text("Tomorrow")'
}

export default class AddDate extends BaseModal {
  constructor(pages: Pages) {
    super(pages, SELECTORS.dialog)
  }

  get tomorrow() {
    return new Button(this.page, SELECTORS.tomorrow)
  }
}