import { Page } from "@playwright/test";
import BasePage from "./base-page";
import LoginPage from "./login-page";
import HomePage from "./home-page";
import MainPage from "./main-page";
import { Modals } from "../modals";

export class Pages {
  readonly basePage: BasePage;
  readonly login: LoginPage;
  readonly home: HomePage;
  readonly main: MainPage;
  readonly modals: Modals;

  constructor(readonly page: Page) {
    this.basePage = new BasePage(this);
    this.login = new LoginPage(this);
    this.home = new HomePage(this);
    this.main = new MainPage(this);
    this.modals = new Modals(this);
  }
}