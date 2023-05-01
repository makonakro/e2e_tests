import { Page } from "@playwright/test";
import BasePage from "./base-page";
import LoginPage from "./login-page";

export class Pages {
  readonly basePage: BasePage;
  readonly login: LoginPage;

  constructor(readonly page: Page) {
    this.basePage = new BasePage(this);
    this.login = new LoginPage(this);
  }
}