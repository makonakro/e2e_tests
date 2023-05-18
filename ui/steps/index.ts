import { Page } from '@playwright/test'
import { Pages } from '../pages'

export class Steps {
  public pages: Pages

  constructor(args: { page: Page }) {
    this.pages = new Pages(args.page)
  }
}
