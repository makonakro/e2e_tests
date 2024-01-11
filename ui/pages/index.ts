import { Page } from '@playwright/test'
import BasePage from './base-page'
import LoginPage from './login-page'
import HomePage from './home-page'
import MainPage from './main-page'
import { Modals } from '../modals'
import Task from './task'

export class Pages {
  readonly basePage: BasePage
  readonly login: LoginPage
  readonly home: HomePage
  readonly main: MainPage
  readonly task: Task
  readonly modals: Modals

  constructor(readonly page: Page) {
    this.basePage = new BasePage(this)
    this.login = new LoginPage(this)
    this.home = new HomePage(this)
    this.main = new MainPage(this)
    this.task = new Task(this)
    this.modals = new Modals(this)
  }
}
